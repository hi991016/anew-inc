import { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface SEOProps {
  title?: string
  url?: string
  ogImg?: string
  description?: string
  children?: ReactNode
}

const SEO = ({
  title = 'anew inc. ｜ アニュウインク',
  description = 'anew inc.はプロダクトサステナビリティの観点から「私たちはいかにしてよき祖先となれるか」というグッドアンセスターとしての可能性を追求するプロジェクトチームです。',
  url = 'https://anew-inc.com',
  ogImg = 'https://anew-inc.com/ogp.jpg',
  children
}: SEOProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        {/* Standard metadata tags */}
        <meta name='description' content={description} />
        {/* End standard metadata tags */}
        {/* Facebook tags */}
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={ogImg} />
        {/* End Facebook tags */}
        {/* Twitter tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={title} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image:src' content={ogImg} />
        {/* End Twitter tags */}

        <title>{title}</title>
      </Helmet>

      {children}
    </HelmetProvider>
  )
}

export default SEO
