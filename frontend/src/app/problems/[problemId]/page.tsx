"use client"

import React, { useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import sampleProblems from '@/constants/sampleProblems';
import DOMPurify from 'isomorphic-dompurify';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Editor } from '@monaco-editor/react';
import languages from '@/constants/languages';
import themes from '@/constants/themes';
import axios from 'axios';
import useProblem from '@/hooks/useProblem';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';


function page({ params: { problemId } }: { params: { problemId: number } }) {

    const [IsDragging, setIsDragging] = useState(false);
    const [DraggingVertical, setDraggingVertical] = useState(false);
    const [IsLeftWidth, setIsLeftWidth] = useState(50);
    const [rightWidth, setRightWidth] = useState(50);
    const [upHeight, setUpHeight] = useState(70);
    const [downHeight, setDownHeight] = useState(30);
    // const [editorLeft, setEditorLeft] = useState(650);
    // const [tab, setTab] = useState('Description');
    const [testCaseIndex, setTestCaseIndex] = useState(0);

    const { loading, problem, error, testCases, template } = useProblem(problemId);

    const [languageValue, setLanguageValue] = useState(() => {
        const language = sessionStorage.getItem('language');
        return language ? language : 'javascript'
    });

    const [starterCode, setStarterCode] = useState('');

    const [sourceCode, setSourceCode] = useState('');
    console.log(`starterCode:- ${starterCode}`);

    const [themeName, setThemeName] = useState(() => {
        const theme = sessionStorage.getItem('theme');
        return theme ? theme : 'vs-dark'
    });

    useEffect(() => {
        sessionStorage.setItem('language', languageValue);
        const languageId = (languageValue === 'javaScript' ? '63' : languageValue === 'java' ? '62' : languageValue === 'python' ? '71' : '50')

        console.log(`template:- ${template}`);
        template && template.map((temp) => {
            if (temp.languageId === Number(languageId)) {
                console.log(`starterCode:- ${temp.code}`);
                setStarterCode(temp.code);
            }
        })
        console.log('template:', template);
        console.log('languageId:', languageId);

    }, [languageValue])

    useEffect(() => {
        sessionStorage.setItem('theme', themeName)
    }, [themeName]);


    const problems1 = problem?.description ? DOMPurify.sanitize(problem.description) : '';
    // console.log(problems1);

    const problems = DOMPurify.sanitize(sampleProblems.problem1)
    // console.log(problems);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e);
        e.preventDefault();
        setIsDragging(true);
    }

    const handleMouseUp = () => {
        if (IsDragging) {
            setIsDragging(false);
        }

        if (DraggingVertical) {
            setDraggingVertical(false);
        }
    }

    const handleMouseUpDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDraggingVertical(true);
    }

    const dragMouseChange = (e: React.MouseEvent) => {

        if (IsDragging) {
            const newLeftWidth = (e.clientX / window.innerWidth) * 100;

            console.log('width', newLeftWidth);
            const newRightWidth = 100 - newLeftWidth;
            setRightWidth(newRightWidth);
            setIsLeftWidth(newLeftWidth);
        }

        if (DraggingVertical) {
            const newUpHeight = (e.clientY / window.innerHeight) * 100;

            console.log('width', newUpHeight);
            const newDownHeight = 100 - newUpHeight;
            console.log('up', newUpHeight);
            console.log('down', newDownHeight);


            setUpHeight(newUpHeight);
            setDownHeight(newDownHeight);
        }
    }

    const handleThemeChange = (theme: string) => {
        setThemeName(theme);
    }

    const handleLanguage = (lang: string) => {
        setLanguageValue(lang);
    }

    const editorRef = useRef(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        editorRef.current = editor;
        console.log('editor', editor);

    }

    function handleEditorChange(value: any) {
        // here is the current value
        console.log(`value',${value}`);
        setSourceCode(value);
    }

    // const problemId = useSearchParams().get('problemId');

    async function submitSolution() {
        console.log('lh');


        const response = await axios.post(`http://localhost:4000/api/v1/submissions/`, {
            source_code: sourceCode,
            language_id: (languageValue === 'javaScript' ? '63' : languageValue === 'java' ? '62' : languageValue === 'python' ? '71' : '54'),
            problemId
        })
        // const stdout = response.data.msg.stdout;
        // console.log(`stdout: ${stdout}, status ${status}`);
        // const status = response.data.msg.status.description;
        console.log(JSON.stringify(response.data.msg));
        
        console.log(`response:- ${response.data.msg.map((status: any)=>status.status.description==="Accepted")}`);
        const status = response.data.msg.map((status: any)=>status.status.description==="Accepted");
        // console.log(`status:- ${JSON.stringify(response.data.status)}`);
        
        if (status) {
            toast.success('Accepted...!!!');
        } else {
            toast.error('Rejected...!!!');
        }

        // console.log('response', response);

    }
    // console.log('test cases', testCases);

    const changeTestCase = (index: number) => {
        setTestCaseIndex(index);
        // console.log(testCases![testCaseIndex].input)
        // console.log(`index:- ${index}`);
    }


    return (
        <div>
            <div className='border border-gray-600  h-[calc(100vh-56px)] flex mt-1' onMouseUp={handleMouseUp} onMouseMove={dragMouseChange}>
                <div className='border border-gray-600 dark:border-black h-[calc(100vh-56px)] w-[45rem] p-4 overflow-y-scroll no-scrollbar' style={{ width: `${IsLeftWidth}%` }}>
                    <div className='text-2xl font-bold mb-4'>{problem?.title}</div>
                    <Markdown rehypePlugins={[rehypeRaw]}>{problems1}</Markdown>
                </div>

                <div className='border border-gray-600 w-2 cursor-col-resize' onMouseDown={handleMouseDown} ></div>

                <div className='h-[calc(100vh-66px)] w-[55rem]' style={{ width: `${rightWidth}%` }}>
                    <div className='flex'>
                        <div className='border'>
                            <Select onValueChange={handleLanguage}>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder={languageValue} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            languages.map(lang => (
                                                <SelectItem key={lang.name} value={lang.name}>{lang.name}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select onValueChange={handleThemeChange}>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder={themeName} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            themes.map(theme => (
                                                <SelectItem key={theme.value} value={theme.value}>{theme.name}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Button onClick={submitSolution}>Run</Button>
                        </div>
                    </div>
                    <div >


                        <Editor
                            height='86vh'
                            defaultLanguage={languageValue}
                            theme={themeName}
                            value={starterCode}
                            onMount={handleEditorDidMount}
                            onChange={handleEditorChange}
                        />

                    </div>

                    {/* <div className='border border-gray-600 w-full h-3 cursor-row-resize' onMouseDown={handleMouseUpDown} ></div> */}

                    <div className='w-full relative ' >

                        <Sheet >
                            <SheetTrigger asChild>
                                <Button className=' w-[6rem]  absolute bottom-4 left-2' >Test cases</Button>
                            </SheetTrigger>
                            <SheetContent side={"bottom"}
                                style={{
                                    width: `${rightWidth}%`,
                                    right: 0,
                                    left: 'auto',
                                    position: 'absolute'
                                }}
                            >
                                <SheetHeader>
                                    <SheetTitle>Test cases</SheetTitle>
                                </SheetHeader>
                                <div className="flex gap-4 mt-2">
                                    <div className='flex flex-col'>
                                        {
                                            testCases && testCases.map((_, index) => (
                                                <div className='flex gap-4'>
                                                    <div><Button onClick={() => changeTestCase(index)} className='w-[4rem]'>{`Case:- ${index + 1}`}</Button></div>
                                                </div>
                                            ))
                                        }
                                        <div>
                                            <div>Input</div>
                                            <Button className='w-[40rem]'>{testCases && testCases![testCaseIndex].input}</Button>
                                            <div>output</div>
                                            <Button className='w-[40rem]'>{testCases && testCases![testCaseIndex].output}</Button>
                                        </div>
                                    </div>
                                    {/* <div className='flex flex-col'>
                                    <div className='flex gap-4'>
                                        <div><Button className='w-[4rem]'>Case: 1</Button></div>
                                        <div><Button className='w-[4rem]'>Case: 2</Button></div>
                                        <div><Button className='w-[4rem]'>Case: 3</Button></div>
                                    </div>
                                    <div>     
                                        <div>Input</div>
                                        <Button className='w-[40rem]'>Input</Button>
                                        <div>output</div>
                                        <Button className='w-[40rem]'>output</Button>
                                    </div>
                                    </div> */}
                                </div>

                            </SheetContent>
                        </Sheet>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default page;