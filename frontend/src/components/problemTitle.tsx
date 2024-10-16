"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function ProblemTitle({ problem }: { problem: { title: string } }) {
    const router = useRouter();

    const handleRedirect = () => {

    }

    return (

        <div className="text-left cursor-pointer hover:text-blue-600" onClick={() => router.push(`/problems/${problem.title}`)}>
            {problem.title.length > 36 ? `${(problem.title).slice(0, 36)}...` : problem.title}
        </div>

    )
}

export default ProblemTitle