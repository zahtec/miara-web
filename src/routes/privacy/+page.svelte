<script lang="ts">
	import Banner from "$lib/components/Banner.svelte";
	import ShieldIcon from "~icons/fluent/shield-20-filled";
	import PageContent from "$lib/components/PageContent.svelte";
	import UpdateNotice from "$lib/components/UpdateNotice.svelte";
</script>

<Banner
	title="Privacy"
	description="Miara's official Privacy Policy, outlining how Miara handles and discloses user data."
	class="from-orange-950 to-orange-700"
	icon={ShieldIcon}
/>

<PageContent class="flex flex-col gap-5">
	<UpdateNotice class="bg-orange-800 border-orange-600" />

	<p>
		This privacy policy for Miara (doing business as Miara) ("<strong>we</strong>," "<strong
			>us</strong
		>," or "<strong>our</strong>"), describes how and why we might collect, store, use, and/or share
		("<strong>process</strong>") your information when you use our services ("<strong
			>Services</strong
		>"), such as when you:
	</p>

	<ul>
		<li>
			Visit our website at <a target="_blank" href="https://miara.app">https://miara.app</a> or any website
			of ours that links to this privacy policy.
		</li>

		<li>
			Download and use our mobile application (Miara), or any other application of ours that links
			to this privacy policy
		</li>

		<li>Engage with us in other related ways, including any sales, marketing, or events</li>
	</ul>

	<p>
		<strong>Questions or concerns?</strong> Reading this privacy policy will help you understand
		your privacy rights and choices. If you do not agree with our policies and practices, please do
		not use our Services. If you still have any questions or concerns, please contact us at
		<a href="mailto:support@miara.app">support@miara.app</a>.
	</p>

	<h1 class="font-bold">Overview.</h1>

	<p>
		This summary provides key points from our privacy policy, but you can find out more details
		about any of these topics by clicking the link following each key point or by using the <a
			href="#toc">table of contents</a
		> below to find the section you are looking for.
	</p>

	<ul>
		<li>
			<h1 class="font-semibold">What personal information do we process?</h1>
			<p>
				When you visit, use, or navigate our Services, we may process personal information depending
				on how you interact with us and the Services, the choices you make, and the products and
				features you use. Learn more about <a href="#pi">
					personal information you disclose to us
				</a>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Do we process any sensitive personal information?</h1>
			<p>
				We may process sensitive personal information when necessary with your consent or as
				otherwise permitted by applicable law. Learn more about <a href="#si"
					>information we process</a
				>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Do we receive any information from third parties?</h1>
			<p>
				We may receive information from public databases, marketing partners, social media
				platforms, and other outside sources. Learn more about <a href="#os"
					>information collected from other sources</a
				>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">How do we process your information?</h1>
			<p>
				We process your information to provide, improve, and administer our Services, communicate
				with you, for security and fraud prevention, and to comply with law. We may also process
				your information for other purposes with your consent. We process your information only when
				we have a valid legal reason to do so. Learn more about <a href="#iu"
					>how we process your information</a
				>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">
				In what situations and with which types of parties do we share personal information?
			</h1>
			<p>
				We may share information in specific situations and with specific categories of third
				parties. Learn more about <a href="#ws"
					>when and with whom we share your personal information</a
				>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">How do we keep your information safe?</h1>
			<p>
				We have organizational and technical processes and procedures in place to protect your
				personal information. However, no electronic transmission over the internet or information
				storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee
				that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat
				our security and improperly collect, access, steal, or modify your information. Learn more
				about <a href="#is">how we keep your information safe</a>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">What are your rights?</h1>
			<p>
				Depending on where you are located geographically, the applicable privacy law may mean you
				have certain rights regarding your personal information. Learn more about <a href="#pr"
					>your privacy rights</a
				>.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">How do you exercise your rights?</h1>
			<p>
				The easiest way to exercise your rights is by visiting <a href="mailto:support@miara.app"
					>support@miara.app</a
				>, or by contacting us. We will consider and act upon any request in accordance with
				applicable data protection laws.
			</p>
		</li>
	</ul>

	<p>
		Want to learn more about what we do with any information we collect? <a href="#toc"
			>Review the privacy policy in full</a
		>.
	</p>

	<h1 class="font-bold" id="toc">Table of Contents.</h1>

	<ol class="!ml-7">
		<li>
			<a href="#ic">What information do we collect?</a>
		</li>
		<li>
			<a href="#io">How do we process your information?</a>
		</li>
		<li>
			<a href="#ws">When and with whom do we share your personal information?</a>
		</li>
		<li>
			<a href="#sl">How do we handle your social logins?</a>
		</li>
		<li>
			<a href="#ir">How long do we keep your information?</a>
		</li>
		<li>
			<a href="#is">How do we keep your information safe?</a>
		</li>
		<li>
			<a href="#pr">What are your privacy rights?</a>
		</li>
		<li>
			<a href="#dnt">Controls for do-not-track features.</a>
		</li>
		<li>
			<a href="#ul">Do united states residents have specific privacy rights?</a>
		</li>
		<li>
			<a href="#pu">Do we make updates to this policy?</a>
		</li>
		<li>
			<a href="#c">How can you contact us about this policy?</a>
		</li>
		<li>
			<a href="#r">How can you review, update, or delete the data we collect from you?</a>
		</li>
	</ol>

	<h1 class="font-bold" id="ic">1. What Information Do We Collect?</h1>

	<h1 class="font-semibold">Personal information you disclose to us.</h1>

	<em><strong>In Short:</strong> We collect personal information that you provide to us.</em>

	<p>
		We collect personal information that you voluntarily provide to us when you register on the
		Services, express an interest in obtaining information about us or our products and Services,
		when you participate in activities on the Services, or otherwise when you contact us.
	</p>

	<p>
		<strong>Personal Information Provided by You.</strong> The personal information that we collect depends
		on the context of your interactions with us and the Services, the choices you make, and the products
		and features you use. The personal information we collect may include the following:
	</p>

	<ul>
		<li>names</li>
		<li>phone numbers</li>
		<li>email addresses</li>
		<li>passwords</li>
		<li>contact preferences</li>
		<li>contact or authentication data</li>
		<li>mailing addresses</li>
		<li>job titles</li>
		<li>age</li>
		<li>preferred language and dialect</li>
		<li>gender</li>
		<li>consent to participate in homelessness programs and related examinations</li>
		<li>current access to neccesities, such as food and water</li>
		<li>current and past participance in recreational programs</li>
	</ul>

	<p>
		<strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted
		by applicable law, we process the following categories of sensitive information:
	</p>

	<ul>
		<li>current and past owned possesions</li>
		<li>physical and mental disabilities</li>
		<li>involvement in unreported physical altercations</li>
		<li>current and past involvement with legal entities, such as the police</li>
		<li>involvement in activities that put them at risk of harm</li>
		<li>current and past relationships</li>
		<li>ahealth data</li>
		<li>financial data</li>
		<li>data about a person's sex life or sexual orientation</li>
		<li>information revealing race or ethnic origin</li>
		<li>social security numbers or other government identifiers</li>
		<li>information revealing religious or philosophical beliefs</li>
		<li>current and past parental status</li>
		<li>names of a person's children</li>
		<li>current past status of a person's parents and/or guardians</li>
		<li>current and past use of recreational and illegal drugs</li>
		<li>provided location history</li>
		<li>current and past housing situation</li>
		<li>date of birth</li>
		<li>current and past known exploitation of a person</li>
		<li>current and past emotional state</li>
		<li>current pregnancy status</li>
		<li>current and past alcohol usage</li>
		<li>student data</li>
	</ul>

	<p>
		<strong>Social Media Login Data.</strong> We may provide you with the option to register with us
		using your existing social media account details, like your Facebook, Twitter, or other social
		media account. If you choose to register in this way, we will collect the information described
		in the section called "<a href="#si">How do we handle your social logins?</a>" below.
	</p>

	<p>
		<strong>Application Data.</strong> If you use our application(s), we also may collect the following
		information if you choose to provide us with access or permission:
	</p>

	<ul>
		<li>
			<h1 class="font-semibold">Mobile Device Data.</h1>
			<p>
				We automatically collect device information (such as your mobile device ID, model, and
				manufacturer), operating system, version information and system configuration information,
				device and application identification numbers, browser type and version, hardware model
				Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or
				proxy server). If you are using our application(s), we may also collect information about
				the phone network associated with your mobile device, your mobile device's operating system
				or platform, the type of mobile device you use, your mobile device's unique device ID, and
				information about the features of our application(s) you accessed.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Push Notifications.</h1>
			<p>
				We may request to send you push notifications regarding your account or certain features of
				the application(s). If you wish to opt out from receiving these types of communications, you
				may turn them off in your device's settings.
			</p>
		</li>
	</ul>

	<p>
		This information is primarily needed to maintain the security and operation of our
		application(s), for troubleshooting, and for our internal analytics and reporting purposes.
	</p>

	<p>
		All personal information that you provide to us must be true, complete, and accurate, and you
		must notify us of any changes to such personal information.
	</p>

	<h1 class="font-semibold">Information automatically collected.</h1>

	<em>
		<strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address, browser
		and device characteristics, and interactions with the Services — is collected automatically when
		you visit our Services.
	</em>

	<p>
		We automatically collect certain information when you visit, use, or navigate the Services. This
		information does not reveal your specific identity (like your name or contact information) but
		may include device and usage information, such as your IP address, browser and device
		characteristics, operating system, language preferences, referring URLs, device name, country,
		location, information about how and when you use our Services, and other technical information.
		This information is primarily needed to maintain the security and operation of our Services, and
		for our internal analytics and reporting purposes.
	</p>

	<p>The information we collect includes:</p>

	<ul>
		<li>
			<h1 class="font-semibold">Log and Usage Data.</h1>
			<p>
				Log and usage data is service-related, diagnostic, usage, and performance information our
				servers automatically collect when you access or use our Services and which we record in log
				files. Depending on how you interact with us, this log data may include your IP address,
				device information, browser type, and settings and information about your activity in the
				Services (such as the date/time stamps associated with your usage, pages and files viewed,
				searches, and other actions you take such as which features you use), device event
				information (such as system activity, error reports (sometimes called "crash dumps"), and
				hardware settings).
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Device Data.</h1>
			<p>
				We collect device data such as information about your computer, phone, tablet, or other
				device you use to access the Services. Depending on the device used, this device data may
				include information such as your IP address (or proxy server), device and application
				identification numbers, location, browser type, hardware model, Internet service provider
				and/or mobile carrier, operating system, and system configuration information.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Intent data.</h1>
			<p>
				We collect information about your behavior/interactions with the Services. Intent data
				comprises information such as when you view a specific page/screen, what medium (such as a
				search engine) you originated from, and the buttons or links you have clicked within the
				Services in a specific timeframe.
			</p>
		</li>
	</ul>

	<h1 class="font-semibold">Information collected from other sources.</h1>

	<em
		><strong>In Short:</strong> We may collect limited data from public databases, marketing partners,
		social media platforms, and other outside sources.</em
	>

	<p>
		In order to enhance our ability to provide relevant marketing, offers, and services to you and
		update our records, we may obtain information about you from other sources, such as public
		databases, joint marketing partners, affiliate programs, data providers, social media platforms,
		and from other third parties. This information includes mailing addresses, job titles, email
		addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses,
		social media profiles, social media URLs, and custom profiles, for purposes of targeted
		advertising and event promotion. If you interact with us on a social media platform using your
		social media account (e.g., Facebook or Twitter), we receive personal information about you such
		as your name, email address, and gender. Any personal information that we collect from your
		social media account depends on your social media account's privacy settings.
	</p>

	<h1 class="font-bold" id="io">2. How Do We Process Your Information?</h1>

	<em
		><strong>In Short:</strong> We process your information to provide, improve, and administer our Services,
		communicate with you, for security and fraud prevention, and to comply with law. We may also process
		your information for other purposes with your consent.</em
	>

	<strong
		>We process your personal information for a variety of reasons, depending on how you interact
		with our Services, including:
	</strong>

	<ul>
		<li>
			<h1 class="font-semibold">
				To facilitate account creation and authentication and otherwise manage user accounts.
			</h1>
			<p>
				We may process your information so you can create and log in to your account, as well as
				keep your account in working order.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">To deliver and facilitate delivery of services to the user.</h1>
			<p>We may process your information to provide you with the requested service.</p>
		</li>

		<li>
			<h1 class="font-semibold">To respond to user inquiries/offer support to users.</h1>
			<p>
				We may process your information to respond to your inquiries and solve any potential issues
				you might have with the requested service.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">To send administrative information to you.</h1>
			<p>
				We may process your information to send you details about our products and services, changes
				to our terms and policies, and other similar information.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">
				To evaluate and improve our Services, products, marketing, and your experience.
			</h1>
			<p>
				We may process your information when we believe it is necessary to identify usage trends,
				determine the effectiveness of our promotional campaigns, and to evaluate and improve our
				Services, products, marketing, and your experience.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">To identify usage trends.</h1>
			<p>
				We may process information about how you use our Services to better understand how they are
				being used so we can improve them.
			</p>
		</li>
	</ul>

	<h1 class="font-bold" id="ws">3. When and With Whom Do We Share Your Personal Information?</h1>

	<em
		><strong>In Short:</strong> We may share information in specific situations described in this section
		and/or with the following categories of third parties.</em
	>

	<p>
		<strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your
		data with third-party vendors, service providers, contractors, or agents ("third parties") who perform
		services for us or on our behalf and require access to such information to do that work. The categories
		of third parties we may share personal information with are as follows:
	</p>

	<ul>
		<li>Government Entities</li>
		<li>Homeless Aid Entities</li>
		<li>Homelessness Prevention Entities</li>
	</ul>

	<p>We also may need to share your personal information in the following situations:</p>

	<ul>
		<li>
			<h1 class="font-semibold">Business Transfers.</h1>
			<p>
				We may share or transfer your information in connection with, or during negotiations of, any
				merger, sale of company assets, financing, or acquisition of all or a portion of our
				business to another company.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Affiliates.</h1>
			<p>
				We may share your information with our affiliates, in which case we will require those
				affiliates to honor this privacy policy. Affiliates include our parent company and any
				subsidiaries, joint venture partners, or other companies that we control or that are under
				common control with us.
			</p>
		</li>

		<li>
			<h1 class="font-semibold">Business Partners.</h1>
			<p>
				We may share your information with our business partners to offer you certain products,
				services, or promotions.
			</p>
		</li>
	</ul>

	<h1 class="font-bold" id="sl">4. How Do We Handle Your Social Logins?</h1>

	<em
		><strong>In Short:</strong> If you choose to register or log in to our Services using a social media
		account, we may have access to certain information about you.</em
	>

	<p>
		Our Services offer you the ability to register and log in using your third-party social media
		account details (like your Facebook or Twitter logins). Where you choose to do this, we will
		receive certain profile information about you from your social media provider. The profile
		information we receive may vary depending on the social media provider concerned, but will often
		include your name, email address, friends list, and profile picture, as well as other
		information you choose to make public on such a social media platform.
	</p>

	<p>
		We will use the information we receive only for the purposes that are described in this privacy
		policy or that are otherwise made clear to you on the relevant Services. Please note that we do
		not control, and are not responsible for, other uses of your personal information by your
		third-party social media provider. We recommend that you review their privacy policy to
		understand how they collect, use, and share your personal information, and how you can set your
		privacy preferences on their sites and apps.
	</p>

	<h1 class="font-bold" id="ir">5. How Long Do We Keep Your Information?</h1>

	<em
		><strong>In Short:</strong>We keep your information for as long as necessary to fulfill the
		purposes outlined in this privacy policy unless otherwise required by law.</em
	>

	<p>
		We will only keep your personal information for as long as it is necessary for the purposes set
		out in this privacy policy, unless a longer retention period is required or permitted by law
		(such as tax, accounting, or other legal requirements). No purpose in this policy will require
		us keeping your personal information for longer than the period of time in which users have an
		account with us.
	</p>

	<p>
		When we have no ongoing legitimate business need to process your personal information, we will
		either delete or anonymize such information, or, if this is not possible (for example, because
		your personal information has been stored in backup archives), then we will securely store your
		personal information and isolate it from any further processing until deletion is possible.
	</p>

	<h1 class="font-bold" id="is">6. How Do We Keep Your Information Safe?</h1>

	<em
		><strong>In Short:</strong>We aim to protect your personal information through a system of
		organizational and technical security measures.</em
	>

	<p>
		We have implemented appropriate and reasonable technical and organizational security measures
		designed to protect the security of any personal information we process. However, despite our
		safeguards and efforts to secure your information, no electronic transmission over the Internet
		or information storage technology can be guaranteed to be 100% secure, so we cannot promise or
		guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to
		defeat our security and improperly collect, access, steal, or modify your information. Although
		we will do our best to protect your personal information, transmission of personal information
		to and from our Services is at your own risk. You should only access the Services within a
		secure environment.
	</p>

	<h1 class="font-bold" id="pr">7. What Are Your Privacy Rights?</h1>

	<em><strong>In Short:</strong>You may review, change, or terminate your account at any time.</em>

	<p>
		<strong>Withdrawing your consent:</strong> If we are relying on your consent to process your
		personal information, which may be express and/or implied consent depending on the applicable
		law, you have the right to withdraw your consent at any time. You can withdraw your consent at
		any time by contacting us by using the contact details provided in the section "<a href="#c"
			>How can you contact us about this policy?</a
		>" below.
	</p>

	<p>
		However, please note that this will not affect the lawfulness of the processing before its
		withdrawal nor, when applicable law allows, will it affect the processing of your personal
		information conducted in reliance on lawful processing grounds other than consent.
	</p>

	<h1 class="font-semibold">Account Information.</h1>

	<p>
		If you would at any time like to review or change the information in your account or terminate
		your account, you can:
	</p>

	<ul>
		<li>Log in to your account settings and update your user account.</li>
		<li>
			Contact us at support@miara.app to permanently delete your account and all of its associated
			information.
		</li>
	</ul>

	<p>
		Upon your request to terminate your account, we will deactivate or delete your account and
		information from our active databases. However, we may retain some information in our files to
		prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms
		and/or comply with applicable legal requirements.
	</p>

	<p>
		If you have questions or comments about your privacy rights, you may email us at <a
			href="mailto:support@miara.app">support@miara.app</a
		>.
	</p>

	<h1 class="font-bold" id="dnt">8. Controls for Do-Not-Track Features.</h1>

	<p>
		Most web browsers and some mobile operating systems and mobile applications include a
		Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not
		to have data about your online browsing activities monitored and collected. At this stage no
		uniform technology standard for recognizing and implementing DNT signals has been finalized. As
		such, we do not currently respond to DNT browser signals or any other mechanism that
		automatically communicates your choice not to be tracked online. If a standard for online
		tracking is adopted that we must follow in the future, we will inform you about that practice in
		a revised version of this privacy policy.
	</p>

	<h1 class="font-bold" id="ul">9. Do United States Residents Have Specific Privacy Rights?</h1>

	<p>
		<strong>In Short:</strong> If you are a resident of California, you are granted specific rights regarding
		access to your personal information.
	</p>

	<h1 class="font-semibold">What categories of personal information do we collect?</h1>

	<p>
		We have collected the following categories of personal information in the past twelve (12)
		months:
	</p>

	<ul>
		<li>
			<h1 class="font-semibold">Category A: Identifiers.</h1>
			<p>
				Examples: Contact details, such as real name, alias, postal address, telephone or mobile
				contact number, unique personal identifier, online identifier, Internet Protocol address,
				email address, and account name.
			</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">
				Category B: Personal information as defined in the California Customer Records statute.
			</h1>
			<p>
				Examples: Name, contact information, education, employment, employment history, and
				financial information.
			</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">
				Category C: Protected classification characteristics under state or federal law.
			</h1>
			<p>Examples: Gender and date of birth.</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category D: Commercial information.</h1>
			<p>
				Examples: Transaction information, purchase history, financial details, and payment
				information.
			</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category E: Biometric information.</h1>
			<p>Examples: Fingerprints and voiceprints.</p>
			<p>Collected: No.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category F: Internet or other similar network activity.</h1>
			<p>
				Examples: Browsing history, search history, online behavior, interest data, and interactions
				with our and other websites, applications, systems, and advertisements.
			</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category G: Geolocation data.</h1>
			<p>Examples: Device location.</p>
			<p>Collected: No.</p>
		</li>

		<li>
			<h1 class="font-semibold">
				Category H: Audio, electronic, visual, thermal, olfactory, or similar information.
			</h1>
			<p>
				Examples: Images and audio, video or call recordings created in connection with our business
				activities.
			</p>
			<p>Collected: No.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category I: Professional or employment-related information.</h1>
			<p>
				Examples: Business contact details in order to provide you our Services at a business level
				or job title, work history, and professional qualifications if you apply for a job with us.
			</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category J: Education Information.</h1>
			<p>Examples: Student records and directory information.</p>
			<p>Collected: Yes.</p>
		</li>

		<li>
			<h1 class="font-semibold">
				Category K: Inferences drawn from collected personal information.
			</h1>
			<p>
				Examples: Inferences drawn from any of the collected personal information listed above to
				create a profile or summary about, for example, an individual's preferences and
				characteristics.
			</p>
			<p>Collected: No.</p>
		</li>

		<li>
			<h1 class="font-semibold">Category L: Sensitive personal Information.</h1>
			<p>
				Examples: Citizenship or immigration status, health data, racial or ethnic origin, religious
				or philosophical beliefs, sex life or sexual orientation, social security numbers and
				account login information.
			</p>
			<p>Collected: Yes.</p>
		</li>
	</ul>

	<p>
		We will use and retain the collected personal information as needed to provide the Services or
		for the categories A, B, C, D, F, I, J, and L as long as the user has an account with us.
	</p>

	<p>
		Category L information may be used, or disclosed to a service provider or contractor, for
		additional, specified purposes. You have the right to limit the use or disclosure of your
		sensitive personal information.
	</p>

	<p>
		We may also collect other personal information outside of these categories through instances
		where you interact with us in person, online, or by phone or mail in the context of:
	</p>

	<ul>
		<li>Receiving help through our customer support channels;</li>
		<li>Participation in customer surveys or contests; and</li>
		<li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
	</ul>

	<h1 class="font-semibold">How do we use and share your personal information?</h1>

	<p>
		Learn about how we use your personal information in the section, "<a href="#pi"
			>How Do We Process Your Information?</a
		>"
	</p>

	<p>We collect and share your personal information through:</p>

	<ul>
		<li>Form submissions.</li>
		<li>Communications with service providers.</li>
	</ul>

	<h1 class="font-semibold">Will your information be shared with anyone else?</h1>

	<p>
		We may disclose your personal information with our service providers pursuant to a written
		contract between us and each service provider. Learn more about how we disclose personal
		information to in the section, "<a href="#ws"
			>When and With Whom Do We Share Your Personal Information?</a
		>"
	</p>

	<p>
		We may use your personal information for our own business purposes, such as for undertaking
		internal research for technological development and demonstration. This is not considered to be
		"selling" of your personal information.
	</p>

	<p>
		We have not sold or shared any personal information to third parties for a business or
		commercial purpose in the preceding twelve (12) months. We have disclosed the following
		categories of personal information to third parties for a business or commercial purpose in the
		preceding twelve (12) months:
	</p>

	<ul>
		<li><strong>Category A:</strong> Identifiers.</li>
		<li>
			<strong>Category B:</strong> Personal Information as defined in the California Customer Records
			law.
		</li>
		<li>
			<strong>Category C:</strong> Characteristics of protected classifications under state or federal
			law.
		</li>
		<li><strong>Category D:</strong> Commercial information.</li>
		<li><strong>Category F:</strong> Internet or other electronic network activity information.</li>
		<li><strong>Category I:</strong> Professional or employment-related information.</li>
		<li><strong>Category J:</strong> Education information.</li>
		<li><strong>Category L:</strong> Sensitive personal information.</li>
	</ul>

	<p>
		The categories of third parties to whom we disclosed personal information for a business or
		commercial purpose can be found under "<a href="#ws"
			>When and With Whom Do We Share Your Personal Information?</a
		>"
	</p>

	<h1 class="font-semibold">California Residents.</h1>

	<p>
		California Civil Code Section 1798.83, also known as the "Shine The Light" law permits our users
		who are California residents to request and obtain from us, once a year and free of charge,
		information about categories of personal information (if any) we disclosed to third parties for
		direct marketing purposes and the names and addresses of all third parties with which we shared
		personal information in the immediately preceding calendar year. If you are a California
		resident and would like to make such a request, please submit your request in writing to us
		using the contact information provided below.
	</p>

	<p>
		If you are under 18 years of age, reside in California, and have a registered account with the
		Services, you have the right to request removal of unwanted data that you publicly post on the
		Services. To request removal of such data, please contact us using the contact information
		provided below and include the email address associated with your account and a statement that
		you reside in California. We will make sure the data is not publicly displayed on the Services,
		but please be aware that the data may not be completely or comprehensively removed from all our
		systems (e.g., backups, etc.).
	</p>

	<h1 class="font-semibold">CCPA Privacy Notice.</h1>

	<p>
		This section applies only to California residents. Under the California Consumer Privacy Act
		(CCPA), you have the rights listed below.
	</p>

	<p>The California Code of Regulations defines a "residents" as:</p>

	<ol>
		<li>
			every individual who is in the State of California for other than a temporary or transitory
			purpose and
		</li>
		<li>
			every individual who is domiciled in the State of California who is outside the State of
			California for a temporary or transitory purpose.
		</li>
	</ol>

	<p>All other individuals are defined as "non-residents."</p>

	<p>
		If this definition of "resident" applies to you, we must adhere to certain rights and
		obligations regarding your personal information.
	</p>

	<h1 class="font-semibold">Your rights with respect to your personal data.</h1>

	<h1 class="font-semibold">Right to request deletion of the data — Request to delete.</h1>

	<p>
		You can ask for the deletion of your personal information. If you ask us to delete your personal
		information, we will respect your request and delete your personal information, subject to
		certain exceptions provided by law, such as (but not limited to) the exercise by another
		consumer of his or her right to free speech, our compliance requirements resulting from a legal
		obligation, or any processing that may be required to protect against illegal activities.
	</p>

	<h1 class="font-semibold">Right to be informed — Request to know.</h1>

	<p>Depending on the circumstances, you have a right to know:</p>

	<ul>
		<li>whether we collect and use your personal information;</li>
		<li>the categories of personal information that we collect;</li>
		<li>the purposes for which the collected personal information is used;</li>
		<li>whether we sell your personal information to third parties;</li>
		<li>
			the categories of personal information that we sold or disclosed for a business purpose;
		</li>
		<li>
			the categories of third parties to whom the personal information was sold or disclosed for a
			business purpose; and
		</li>
		<li>the business or commercial purpose for collecting or selling personal information; and</li>
		<h1>the specific pieces of personal information we collected about you.</h1>
	</ul>

	<p>
		In accordance with applicable law, we are not obligated to provide or delete consumer
		information that is de-identified in response to a consumer request or to re-identify individual
		data to verify a consumer request.
	</p>

	<h1 class="font-semibold">
		Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights.
	</h1>

	<p>We will not discriminate against you if you exercise your privacy rights.</p>

	<h1 class="font-semibold">
		Right to Limit Use and Disclosure of Sensitive Personal Information.
	</h1>

	<p>If the business collects any of the following:</p>

	<ul>
		<li>social security information, drivers' licenses, state ID cards, passport numbers</li>
		<li>account login information</li>
		<li>
			credit card numbers, financial account information, or credentials allowing access to such
			accounts
		</li>
		<li>precise geolocation</li>
		<li>racial or ethnic origin, religious or philosophical beliefs, union membership</li>
		<li>
			the contents of email and text, unless the business is the intended recipient of the
			communication
		</li>
		<li>genetic data, biometric data, and health data</li>
		<li>data concerning sexual orientation and sex life</li>
	</ul>

	<p>
		you have the right to direct that business to limit its use of your sensitive personal
		information to that use which is necessary to perform the Services.
	</p>

	<p>
		Once a business receives your request, they are no longer allowed to use or disclose your
		sensitive personal information for any other purpose unless you provide consent for the use or
		disclosure of sensitive personal information for additional purposes.
	</p>

	<p>
		Please note that sensitive personal information that is collected or processed without the
		purpose of inferring characteristics about a consumer is not covered by this right, as well as
		the publicly available information.
	</p>

	<p>
		To exercise your right to limit use and disclosure of sensitive personal information, please
		email <a href="mailto:support@miara.app">support@miara.app</a>.
	</p>

	<h1 class="font-semibold">Verification process.</h1>

	<p>
		Upon receiving your request, we will need to verify your identity to determine you are the same
		person about whom we have the information in our system. These verification efforts require us
		to ask you to provide information so that we can match it with information you have previously
		provided us. For instance, depending on the type of request you submit, we may ask you to
		provide certain information so that we can match the information you provide with the
		information we already have on file, or we may contact you through a communication method (e.g.,
		phone or email) that you have previously provided to us. We may also use other verification
		methods as the circumstances dictate.
	</p>

	<p>
		We will only use personal information provided in your request to verify your identity or
		authority to make the request. To the extent possible, we will avoid requesting additional
		information from you for the purposes of verification. However, if we cannot verify your
		identity from the information already maintained by us, we may request that you provide
		additional information for the purposes of verifying your identity and for security or
		fraud-prevention purposes. We will delete such additionally provided information as soon as we
		finish verifying you.
	</p>

	<h1 class="font-semibold">Other privacy rights.</h1>

	<ul>
		<li>You may object to the processing of your personal information.</li>
		<li>
			You may request correction of your personal data if it is incorrect or no longer relevant, or
			ask to restrict the processing of the information.
		</li>
		<li>
			You can designate an authorized agent to make a request under the CCPA on your behalf. We may
			deny a request from an authorized agent that does not submit proof that they have been validly
			authorized to act on your behalf in accordance with the CCPA.
		</li>
		<li>
			You may request to opt out from future selling or sharing of your personal information to
			third parties. Upon receiving an opt-out request, we will act upon the request as soon as
			feasibly possible, but no later than fifteen (15) days from the date of the request
			submission.
		</li>
	</ul>

	<p>
		To exercise these rights, you can contact us by email at <a href="mailto:support@miara.app"
			>support@miara.app</a
		> or by referring to the contact details at the bottom of this document. If you have a complaint
		about how we handle your data, we would like to hear from you.
	</p>

	<h1 class="font-bold" id="pu">10. Do We Make Updates to This policy?</h1>

	<em
		><strong>In Short:</strong> Yes, we will update this policy as necessary to stay compliant with relevant
		laws.</em
	>

	<p>
		We may update this privacy policy from time to time. The updated version will be indicated by an
		updated "Revised" date and the updated version will be effective as soon as it is accessible. If
		we make material changes to this privacy policy, we may notify you either by prominently posting
		a notice of such changes or by directly sending you a notification. We encourage you to review
		this privacy policy frequently to be informed of how we are protecting your information.
	</p>

	<h1 class="font-bold" id="c">11. How Can You Contact Us About This Policy?</h1>

	<p>
		If you have questions or comments about this policy, you may email us at <a
			href="mailto:support@miara.app">support@miara.app</a
		>.
	</p>

	<h1 class="font-bold" id="r">
		12. How Can You Review, Update, or Delete the Data We Collect From You?
	</h1>

	<p>
		You have the right to request access to the personal information we collect from you, change
		that information, or delete it. To request to review, update, or delete your personal
		information, please email us at <a href="mailto:support@miara.app">support@miara.app</a>.
	</p>
</PageContent>

<style>
	strong {
		@apply font-semibold;
	}

	a {
		@apply underline;
	}

	ul {
		@apply list-disc ml-4 flex flex-col gap-2;
	}

	ol {
		@apply list-decimal ml-4 flex flex-col gap-2;
	}
</style>
