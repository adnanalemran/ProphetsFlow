import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    noindex?: boolean;
    nofollow?: boolean;
    lang?: string;
}

export default function SEO({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/favicon.svg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
    nofollow = false,
    lang = 'bn',
}: SEOProps) {
    const fullTitle = title.includes('ইসলামের নবীগণ') ? title : `${title} | ইসলামের নবীগণ`;
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : (typeof window !== 'undefined' ? window.location.href : '');
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <html lang={lang} />
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            
            {/* Robots */}
            <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
            <meta name="googlebot" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
            
            {/* Canonical URL */}
            {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:locale" content="bn_BD" />
            <meta property="og:site_name" content="ইসলামের নবীগণ" />
            
            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={fullCanonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />
            
            {/* Additional Meta Tags */}
            <meta name="author" content="ইসলামের নবীগণ" />
            <meta name="theme-color" content="#059669" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="ইসলামের নবীগণ" />
            
            {/* Mobile Optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <meta name="format-detection" content="telephone=no" />
        </Helmet>
    );
}
