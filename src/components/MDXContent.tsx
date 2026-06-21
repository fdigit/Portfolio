import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4 text-text-dark dark:text-text-light" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-semibold mt-8 mb-4 text-text-dark dark:text-text-light" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-medium mt-6 mb-3 text-text-dark dark:text-text-light" {...props} />,
  p: (props: any) => <p className="text-lg text-gray-dark dark:text-gray-300 leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 text-gray-dark dark:text-gray-300" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => (
    <a className="text-primary hover:text-primary-dark underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors" {...props} />
  ),
  img: (props: any) => (
    <div className="relative w-full my-8 rounded-xl overflow-hidden border border-gray-light dark:border-gray-medium/20 shadow-xl">
        <Image 
            src={props.src} 
            alt={props.alt || "Case study image"} 
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
        />
    </div>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-gray-dark dark:text-gray-300 bg-primary/5 p-4 rounded-r-lg" {...props} />
  ),
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="mdx-content">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
