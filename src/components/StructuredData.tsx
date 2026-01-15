import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
    type: 'WebSite' | 'Article' | 'Person' | 'BreadcrumbList';
    data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData, null, 0)}
            </script>
        </Helmet>
    );
}
