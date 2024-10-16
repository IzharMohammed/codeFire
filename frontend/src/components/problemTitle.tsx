"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function ProblemTitle({ title, id }: { title: string, id: number }) {
    const router = useRouter();

    return (
        <div className="text-left cursor-pointer hover:text-blue-600" onClick={() => router.push(`/problems/${id}`)}>
            {title.length > 36 ? `${(title).slice(0, 36)}...` : title}
        </div>
    )
}

export default ProblemTitle