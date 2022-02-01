import Head from "next/head";

type DocumentHeadProps = {
  title?: string
}

export default function DocumentHead({ title }: DocumentHeadProps) {
  return (
    <Head>
       <link rel="shortcut icon" href="/images/favicon.jpg" />
       <title>
         Bogdan Preda
         {title ? ` - ${title}` : ''}
       </title>
    </Head>
  );
}