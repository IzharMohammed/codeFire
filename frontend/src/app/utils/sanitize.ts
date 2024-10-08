import DOMPurify from "isomorphic-dompurify";

export const sanitizeMarkdown = (markdown: string): string => {
    const normalizedImportedMarkdown = markdown
        .split('\n')
        .map(line => line.trim())
        .join('\n');
    return DOMPurify.sanitize(normalizedImportedMarkdown, {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'p', 'b', 'i', 'strong', 'em']
    });
}
