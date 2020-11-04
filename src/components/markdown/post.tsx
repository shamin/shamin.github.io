import React, { ReactNode } from 'react';
import MDXStyler from './mdxStyler';

interface PostPageProps {
  children: ReactNode;
}

const PostPage: React.FC<PostPageProps> = (props: PostPageProps) => (
  <div>
    <div className="markdown">
      <MDXStyler>{props.children}</MDXStyler>
    </div>
  </div>
);

export default PostPage;