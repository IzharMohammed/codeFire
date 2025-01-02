"use client"
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from 'next/navigation';

function PaginationComponent({ hasMore }: { hasMore: boolean }) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get('page') ?? '1';
    const take = searchParams.get('take') ?? '10';

    const isPreviousDisabled = +page <= 1;

    const handlePageChange = (page: number) => {
        if (page > 0) {
            router.push(`/?page=${page}&take=${take}`)
        }
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className={isPreviousDisabled ? "opacity-50 cursor-not-allowed" : ""}
                        //@ts-ignore
                        disabled={isPreviousDisabled}
                        onClick={() => !isPreviousDisabled && handlePageChange(+page - 1)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        className={!hasMore ? "opacity-50 cursor-not-allowed" : ""}
                        //@ts-ignore
                        disabled={!hasMore}
                        onClick={() => handlePageChange(+page + 1)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationComponent;