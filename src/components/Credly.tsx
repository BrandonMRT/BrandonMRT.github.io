export default function Credly({ badgeId }: { badgeId: string; }){
    return (
        <div>
            <div data-iframe-width="185" data-iframe-height="280" data-share-badge-id={badgeId} data-share-badge-host="https://www.credly.com" suppressHydrationWarning ></div>
        </div>
    )
}