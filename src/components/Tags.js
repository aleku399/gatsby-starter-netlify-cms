import React from 'react';
import Link from 'gatsby-link';
import { FaArchive } from 'react-icons/fa';

export default function Tags({ list = [] }) {
  return (
    <ul className="tags">
      {list.map(tag =>
        <li key={tag}>
          <Link to={`/tags/${tag}`} className="tag">
          <FaArchive className="icon white" />
            {tag}
          </Link>
        </li>
      )}
    </ul>
  );
}
