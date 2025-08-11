<h1 align="center">CookieBannerBlocker</h1>
<p align="center">Block cookie consent notices on every website and enjoy a cleaner, faster, distraction-free web experience.</p>

<p align="center">
	<img src="https://itsmarian.is-a.dev/CookieBannerBlocker/assets/index-hero.jpeg" alt="CookieBannerBlocker Hero Image" style="width:100%; height:auto;">
</p>

<h1></h1>

<p align="center">
    <img height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/built-with/markdown_vector.svg">
    <a href="https://itsmarian.is-a.dev/CookieBannerBlocker/" target="_blank">
        <img height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/documentation/readthedocs_vector.svg">
    </a>
    <a href="https://itsmarian.is-a.dev/CookieBannerBlocker/" target="_blank">
        <img height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/documentation/website_vector.svg">
    </a>
</p>
<p align="center">
    <a href="https://ko-fi.com/itsmarian/" target="_blank">
        <img  height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/donate/kofi-singular_vector.svg">
    </a>
    <a href="https://discord.com/users/860122608682795028" target="_blank">
        <img height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/discord-singular_vector.svg">
    </a>
    <a href="https://github.com/itsmarianmc/" target="_blank">
        <img alt="github-singular" height="56" src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy/social/github-singular_vector.svg">
    </a>
</p>

<h1></h1>

<h3>Features:</h3>
<ul>
	<li>
		<strong>Automatic Blocking</strong>
		Detects and blocks cookie banners automatically on all visited websites
	</li>
	<li>
		<strong>Faster Loading</strong>
		Improves website loading times by blocking unnecessary banner scripts
	</li>
	<li>
		<strong>Privacy Focused</strong>
		Protects your privacy without compromising website functionality
	</li>
	<li>
		<strong>Custom Whitelist</strong>
		Add specific websites to your whitelist if you want to see cookie banners
	</li>
	<li>
		<strong>Zero Configuration</strong>
		Works immediately after installation with no setup required
	</li>
	<li>
		<strong>100% Free</strong>
		Fully functional with no hidden costs or subscriptions
	</li>
	<li>
		<strong>Wide Compatibility</strong>
		Supports all major cookie banner systems (OneTrust, Cookiebot, Quantcast, etc.)
	</li>
	<li>
		<strong>Open Source</strong>
		Transparent codebase available on GitHub for inspection and contributions
	</li>
	<li>
		<strong>Regular Updates</strong>
		Continuously improved with new features and compatibility fixes
	</li>
	<li>
		<strong>No Data Collection</strong>
		Doesn't collect or transmit any user browsing data
	</li>
	<li>
		<strong>Browser Compatibility</strong>
		Works with all Chromium-based browsers (Chrome, Edge, Brave, etc.)
	</li>
	<li>
		<strong>Lightweight</strong>
		Minimal performance impact with small memory footprint
	</li>
</ul>

<section>
	<h2>Frequently Asked Questions</h2>
	<details>
		<summary>
			<h3>How does Cookie Banner Blocker work?</h3>
		</summary>
		<p>The extension automatically detects and hides cookie consent banners using:</p>
		<ul>
			<li>A comprehensive list of CSS selectors that target common cookie banner implementations</li>
			<li>CSS rules to hide known cookie banner elements</li>
			<li>DOM removal techniques for cookie banner elements</li>
			<li>Monitoring for dynamically loaded banners</li>
		</ul>
	</details>
	<details>
		<summary>
			<h3>Is this extension legal to use?</h3>
		</summary>
		<p>Cookie Banner Blocker operates legally:</p>
		<ul>
			<li>It doesn't bypass paywalls or access restricted content</li>
			<li>It simply hides visual elements like any ad blocker</li>
			<li>Users remain responsible for complying with cookie policies</li>
			<li>Website owners can request whitelisting</li>
		</ul>
	</details>
	<details>
		<summary>
			<h3>Will this affect website functionality?</h3>
		</summary>
		<p>In most cases, no - websites function normally:</p>
		<ul>
			<li>Core website functionality remains unaffected</li>
			<li>Some sites may require cookie consent for certain features</li>
			<li>You can whitelist sites that require cookie consent</li>
			<li>Continuous testing ensures compatibility</li>
		</ul>
	</details>
	<details>
		<summary>
			<h3>How do I whitelist a website?</h3>
		</summary>
		<p>Whitelisting is simple:</p>
		<ol>
            <li>Open the extension folder</li>
            <li>Open the "contentScript.js" Script in an editor</li>
            <li>Add the domain you wish to whitelist in the "IGNORE_DOMAINS" list</li>
		</ol>
		<p>Whitelisted sites will show cookie banners normally.</p>
	</details>
	<details>
		<summary>
			<h3>Does this extension collect any user data?</h3>
		</summary>
		<p>No, Cookie Banner Blocker is privacy-focused:</p>
		<ul>
			<li>No browsing history collection</li>
			<li>No personal data tracking</li>
			<li>No telemetry or analytics</li>
			<li>Open source code for complete transparency</li>
		</ul>
	</details>
	<details>
		<summary>
			<h3>Which browsers are supported?</h3>
		</summary>
		<p>Currently supported browsers:</p>
		<ul>
			<li>Google Chrome (all versions)</li>
			<li>Microsoft Edge</li>
			<li>Opera</li>
			<li>Opera GX</li>
		</ul>
	</details>
	<details>
		<summary>
			<h3>How often is the blocker updated?</h3>
		</summary>
		<p>We maintain regular update cycles:</p>
		<ul>
			<li>Manual updates when users report issues or I detect an error</li>
			<li>Major version releases every 3-4 months</li>
		</ul>
		<p>Currently the extension can not be updated automatically, but this feature will come soon!</p>
	</details>
	<details>
		<summary>
			<h3>Can website owners detect this extension?</h3>
		</summary>
		<p>Detection is possible but unlikely:</p>
		<ul>
			<li>We don't leave obvious traces of our presence</li>
			<li>Some sophisticated sites may detect hidden elements</li>
			<li>Website owners can request whitelisting</li>
		</ul>
	</details>
	<div>
		<p>Still have questions? <a href="https://itsmarian.is-a.dev/#contact">contact me</a> or <a href="https://github.com/itsmarianmc/CookieBannerBlocker/issues">open an issue on GitHub</a>.</p>
	</div>
</section>

<h1></h1>
<p align="center">
    <span>&copy; 2025 CookieBannerBlocker Ltd. via <a href="https://github.com/itsmarianmc/">itsmarian</a> | All rights reserved.</span>
</p>