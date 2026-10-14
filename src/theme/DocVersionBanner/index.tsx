import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useActivePlugin,
  useDocsPreferredVersion,
  useDocsVersion,
  useDocVersionSuggestions,
  type GlobalVersion,
} from '@docusaurus/plugin-content-docs/client';
import DocVersionBanner from '@theme-original/DocVersionBanner';

// Docs versions that are still on Long-Term Support. Use the version name from versions.json.
// DEV NOTE: Docusaurus labels every version older than `lastVersion` as "no longer actively maintained".
// Versions listed here get the LTS banner below instead. Remove a version once its LTS ends and it
// falls back to the stock "unmaintained" banner.
const LTS_VERSIONS = ['10.0'];

type Props = {readonly className?: string};

function LtsVersionBanner({className, versionLabel}: Props & {versionLabel: string}): ReactNode {
  const {siteConfig: {title: siteTitle}} = useDocusaurusContext();
  const {pluginId} = useActivePlugin({failfast: true})!;
  const {savePreferredVersionName} = useDocsPreferredVersion(pluginId);
  const {latestDocSuggestion, latestVersionSuggestion} = useDocVersionSuggestions(pluginId);

  // Link to the same doc in the latest version when it exists, otherwise to the latest version's main doc.
  const getVersionMainDoc = (version: GlobalVersion) =>
    version.docs.find((doc) => doc.id === version.mainDocId)!;
  const latestVersionSuggestedDoc = latestDocSuggestion ?? getVersionMainDoc(latestVersionSuggestion);

  return (
    <div
      className={clsx(className, ThemeClassNames.docs.docVersionBanner, 'alert alert--info margin-bottom--md')}
      role="alert">
      <div>
        This is documentation for {siteTitle} <b>{versionLabel}</b>, which is on Long-Term Support (LTS) release.
      </div>
      <div className="margin-top--md">
        For the newest features, see the{' '}
        <b>
          <Link
            to={latestVersionSuggestedDoc.path}
            onClick={() => savePreferredVersionName(latestVersionSuggestion.name)}>
            latest version
          </Link>
        </b>{' '}
        ({latestVersionSuggestion.label}).
      </div>
    </div>
  );
}

export default function DocVersionBannerWrapper(props: Props): ReactNode {
  const versionMetadata = useDocsVersion();
  if (LTS_VERSIONS.includes(versionMetadata.version)) {
    return <LtsVersionBanner className={props.className} versionLabel={versionMetadata.label} />;
  }
  return <DocVersionBanner {...props} />;
}