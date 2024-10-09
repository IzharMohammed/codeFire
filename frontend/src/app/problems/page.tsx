"use client"

import React, { useRef, useState } from 'react'
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

function page() {
    const [IsDragging, setIsDragging] = useState(false);
    const [DraggingVertical, setDraggingVertical] = useState(false);
    const [IsLeftWidth, setIsLeftWidth] = useState(50);
    const [rightWidth, setRightWidth] = useState(50);
    const [upHeight, setUpHeight] = useState(70);
    const [downHeight, setDownHeight] = useState(30);
    const [editorLeft, setEditorLeft] = useState(650);
    const [tab, setTab] = useState('Description');

    const [languageValue, setLanguageValue] = useState('javascript');
    const [themeName, setThemeName] = useState('vs-dark');
    const [fontSize, setFontSize] = useState(20);

    const problems = DOMPurify.sanitize(sampleProblems.problem1);



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

    const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setFontSize(parseInt(e.target.value, 10))
    }
    const editorRef = useRef(null);

    function handleEditorDidMount(editor: any, monaco: any) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        editorRef.current = editor;
    }



    return (
        <div>
            <div className='border border-gray-600  h-[calc(100vh-56px)] flex mt-1' onMouseUp={handleMouseUp} onMouseMove={dragMouseChange}>
                <div className='border border-gray-600 dark:border-black h-[calc(100vh-56px)] w-[45rem] p-4' style={{ width: `${IsLeftWidth}%` }}>
                    <Markdown rehypePlugins={[rehypeRaw]}>{problems}</Markdown>
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
                    </div>
                    <div style={{ height: `${upHeight}%` }} className=''>

                        <Editor
                            defaultLanguage={languageValue}
                            theme={themeName}
                            defaultValue="//start coding ..."
                            onMount={handleEditorDidMount}
                        />

                    </div>

                    <div className='border border-gray-600 w-full h-3 cursor-row-resize' onMouseDown={handleMouseUpDown} ></div>

                    <div className='w-full relative ' style={{ height: `${downHeight}%` }}>

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
                                    <div><Button className='w-[4rem]'>Case: 1</Button></div>
                                    <div><Button className='w-[4rem]'>Case: 2</Button></div>
                                    <div><Button className='w-[4rem]'>Case: 3</Button></div>
                                </div>

                            </SheetContent>
                        </Sheet>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default page