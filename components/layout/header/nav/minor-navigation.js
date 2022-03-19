import { Fragment } from 'react/cjs/react.development';
import Link from 'next/link';
function MinorNavigation() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default MinorNavigation;
