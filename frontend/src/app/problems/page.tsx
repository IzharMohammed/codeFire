"use client"

import React, { useState } from 'react'
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import sampleProblems from '@/constants/sampleProblems';
import DOMPurify from 'isomorphic-dompurify';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

function page() {
    const [IsDragging, setIsDragging] = useState(false);
    const [DraggingVertical, setDraggingVertical] = useState(false);
    const [IsLeftWidth, setIsLeftWidth] = useState(50);
    const [rightWidth, setRightWidth] = useState(50);
    const [upHeight, setUpHeight] = useState(70);
    const [downHeight, setDownHeight] = useState(30);
    const [editorLeft, setEditorLeft] = useState(650);
    const [tab, setTab] = useState('Description');

    const [language, setLanguage] = useState('javascript');
    const [themeName, setTheme] = useState('twilight');
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

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setTheme(e.target.value);
    }

    const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setLanguage(e.target.value);
    }

    const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setFontSize(parseInt(e.target.value, 10))
    }
    return (
        <div>

            <div className='border border-gray-600 dark:border-black h-[calc(100vh-56px)] flex mt-1' onMouseUp={handleMouseUp} onMouseMove={dragMouseChange}>
                <div className='border border-gray-600 dark:border-black h-[calc(100vh-56px)] w-[45rem] p-4' style={{ width: `${IsLeftWidth}%` }}>
                    <Markdown rehypePlugins={[rehypeRaw]}>{problems}</Markdown>
                </div>

                <div className='border border-gray-600 w-2 cursor-col-resize' onMouseDown={handleMouseDown} ></div>

                <div className='h-[calc(100vh-66px)] w-[55rem]' style={{ width: `${rightWidth}%` }}>
                    <div style={{ height: `${upHeight}%` }}>

                    </div>

                    <div className='border border-gray-600 w-full h-3 cursor-row-resize' onMouseDown={handleMouseUpDown} ></div>

                    <div className=' w-full m-0' style={{ height: `${downHeight}%` }}>

                        <Sheet >
                            <SheetTrigger asChild>
                                <Button variant="outline">Bottom</Button>
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
                                <div className="flex">
                                    <div><Button variant="ghost">Case: 1</Button></div>
                                    <div><Button variant="ghost">Case: 2</Button></div>
                                    <div><Button variant="ghost">Case: 3</Button></div>
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