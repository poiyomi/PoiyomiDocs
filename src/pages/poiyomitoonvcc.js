import React from 'react';
import Layout from '@theme/Layout';

export default function PoiyoimiToonVCC() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Set the height to 100vh to fill the entire viewport height
        }}>
        {/* Use an <iframe> to display the website */}
        <iframe
          src="https://poiyomi.github.io/vpm/"
          title="Poiyomi Website"
          style={{ width: '100%', height: '100%' }}
        >
          Your browser does not support iframes.
        </iframe>
      </div>
    </Layout>
  );
}
