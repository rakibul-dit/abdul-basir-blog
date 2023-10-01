import { server } from "../lib/config";
import Image from "next/image";
import { getAllPlaylists2 } from "../lib/fetch";
import Layout from "../components/layout";
import Meta from "../components/meta";
import Header from "../components/header";

export default function About({ playlists }) {
	return (
		<>
			<Meta
				title="জীবন চরিত"
				description="ড. আব্দুল বাসির বিন নওশাদ 'কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' উত্তরা, ঢাকা –এর সহকারী অধ্যাপক ও একাডেমিক প্রধান হিসেবে কর্মরত আছেন। তিনি মদীনা ইসলামী বিশ্ববিদ্যালয় থেকে  ‘কুরআনুল কারীমের প্রতি সম্মান ও ইসলামী দাওয়াতে-এর প্রভাব’ শীর্ষক অভিসন্দর্ভের ওপর পিএইচডি ডিগ্রী অর্জন করেন।"
				url={`${server}/about`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<Header playlists={playlists} />

			<section className="about-page-ctn">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
							<div className="col col-r s12 m12 l4 xl3">
								<div className="about-left">
									<div className="sidebar-profile sc-1">
										<div className="s-profile-image">
											<Image
												src="/img/abdul-basir.jpg"
												alt=""
												layout="fill"
												objectFit="cover"
												objectPosition="center center"
												loading="eager"
												unoptimized
											/>
										</div>

										<h2 className="s-profile-name">
											ড. আব্দুল বাসির বিন নওশাদ
										</h2>

										<ul className="s-profile-social">
											<li>
												<a
													href="https://www.facebook.com/abdul.basir.71216141/"
													target="_blank">
													<i className="facebook fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.youtube.com/c/DrAbdulBasir"
													target="_blank">
													<i className="youtube fab fa-youtube"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col col-r s12 m12 l8 xl9">
								<div className="about-right">
									<div className="blog-area">
										<a
											style={{ marginBottom: "0px" }}
											className="heading-r heading-b">
											পরিচিতি
										</a>

										{/*<div className="about-banner">*/}
										{/*  <Image*/}
										{/*    src={`${server}/img/bg/banner-01.jpg`}*/}
										{/*    alt=""*/}
										{/*    layout="fill"*/}
										{/*    objectFit="cover"*/}
										{/*    objectPosition="center center"*/}
										{/*    loading="eager" unoptimized*/}
										{/*  />*/}
										{/*</div>*/}

										<div className="blog-detail">
											<p>
												<b>শাইখ ড. আব্দুল বাসির বিন নওশাদ</b>, চাঁপাইনবাবগঞ্জ
												জেলার শিবগঞ্জ থানার অন্তর্গত দুরশিয়া গ্রামে জন্মগ্রহণ
												করেন। তবে জন্মের দু'বছরের মাথায় স্বপরিবারে নওগাঁ জেলার
												পোরশা থানার অন্তর্গত কোচন্না গ্রামে স্থানান্তরিত হয়ে
												সেখানেই স্থায়ী হন। মদীনা ইসলামী বিশ্ববিদ্যালয়ের (কোর্স
												ওয়ার্ক অব পিএইচডি)-তে সম্মিলিত মেধা তালিকায় ৩য় স্থান
												অধিকার করে পুরস্কৃত হন এবং মেধার স্বাক্ষর রেখে সর্বোচ্চ
												গ্রেডمُمْتَازٌ مَعَ مَرْتَبَةِ الشَّرَف الأُوْلَى
												জিপিএ-৫ (এক্সিলেন্ট উইথ ফাস্ট ক্লাস অনার্স) পেয়ে
												تَعْظِيْمُ الْقُرْآنِ الْكَرِيْمِ وَآثَارُهُ فِي
												الدَّعْوَةِ إِلَى الله)) ‘কুরআনুল কারীমের প্রতি সম্মান ও
												ইসলামী দাওয়াতে-এর প্রভাব’ শীর্ষক অভিসন্দর্ভের ওপর
												পিএইচডি ডিগ্রী অর্জন করেন। একই বিশ্ববিদ্যালয়ের
												(আদ-দাওয়াহ এন্ড থিওলজী) অনুষদ থেকে কৃতিত্বের সাথে অনার্স
												(ফার্স্ট ক্লাস) এবং ‘আদ-দাওয়াহ এন্ড ইসলামিক কালচার’
												বিভাগ থেকে কৃতিত্বের সাথে মাস্টার্স ও এমফিল ডিগ্রী অর্জন
												করেন এবং মেধার স্বাক্ষর রেখে (ফার্স্ট ক্লাস ফোর্থ) অর্জন
												করে পুরস্কৃত হন। তার এমফিলের বিষয় (الدَّعْوَةُ
												الْإِسْلَامِيَّةُ فِي بَنْغلَادِيْش: مُعَوِّقَاتُهَا
												وَسُبُلُ عِلَاجِهَا) ‘বাংলাদেশে ইসলামী দাওয়াহ:
												প্রতিবন্ধকতা ও প্রতিকার’।
											</p>
										</div>

										<a
											style={{ marginBottom: "0px" }}
											className="heading-r heading-b">
											শিক্ষাজীবন
										</a>
										<div className="blog-detail">
											<p>
												শিক্ষায় হাতেখড়ি তার পিতার কাছেই। প্রাইমারী শিক্ষা দুবইল
												সরকারী প্রাথমিক বিদ্যালয়ে। মাধ্যমিক ও উচ্চ মাধ্যমিক
												শিক্ষা লাভ নওগাঁ জেলার অন্তর্গত নিয়ামতপুর থানার
												'মাকলাহাট দারুল কুরআন ইসলামিয়া' মাদ্রাসায়। এরপর
												পড়াশুনা করেন একই থানার রসূলপুর রহমানিয়া মাদ্রাসায়।
												অতঃপর আরবী ভাষা এবং উচ্চশিক্ষা লাভের জন্য ঢাকা গমন করেন।
												'ইসলামী ঐতিহ্য সংরক্ষণ সংস্থা’র অধীনে 'হায়ার ইনস্টিটিউট
												ফর ইসলামিক স্টাডিজ' প্রতিষ্ঠান থেকে আরবী ভাষা ও ইসলামী
												শরীয়ার উপর হায়্যার ডিপ্লোমা ডিগ্রি অর্জন এবং সম্মিলিত
												মেধা তালিকায় ২য় স্থান অধিকার করেন। এ কৃতিত্ব অর্জনের
												জন্য ‘রিভাইভ্যাল অব ইসলামিক হেরিটেজ সোসাইটি কুয়েত’
												তাদের নিজস্ব প্রতিষ্ঠানে (ঢাকা-গাজীপুরে) আরবী ভাষা ও
												সাহিত্য বিষয়ে শিক্ষক পদে নিয়োগ দান করেন। এ সময় তিনি
												শিক্ষকতার পাশাপাশি দেশের বিভিন্ন স্থানে দাওয়াতী কাজেও
												স্বতঃস্ফূর্ত অংশগ্রহণ করেন।
											</p>
										</div>

										<a
											style={{ marginBottom: "0px" }}
											className="heading-r heading-b">
											উচ্চশিক্ষার জন্য বিদেশ সফর
										</a>
										<div className="blog-detail">
											<p>
												২০০৪ সালে সৌদী আরব সরকার কর্তৃক প্রদত্ত স্কলারশিপ নিয়ে
												উচ্চশিক্ষার জন্য বিশ্বের শ্রেষ্ঠতম ইসলামী বিদ্যাপীঠ
												‘মদীনা ইসলামী বিশ্ববিদ্যালয়ে’ পাড়ি জমান। সেখানে
												'আদ-দাওয়াহ এন্ড থিওলজী' অনুষদে ২০০৮ সালে কৃতিত্বের সাথে
												(ফার্স্ট ক্লাস) পেয়ে অনার্স সমাপ্ত করেন এবং মাস্টার্স
												করার সৌভাগ্য অর্জন করেন। অতঃপর ২০১৪ সালে ‘আদ-দাওয়াহ এন্ড
												ইসলামিক কালচার’ বিভাগ থেকে কৃতিত্বের সাথে মাস্টার্স ও
												এমফিল ডিগ্রী অর্জন করেন এবং মেধার স্বাক্ষর রেখে (ফার্স্ট
												ক্লাস ফোর্থ) হওয়ার গৌরব অর্জন করে পুরস্কৃত হন। তার
												এমফিলের বিষয় ছিল: (الدَّعْوَةُ الْإِسْلَامِيَّةُ فِي
												بَنْغلَادِيْش: مُعَوِّقَاتُهَا وَسُبُلُ عِلَاجِهَا) তথা,
												‘বাংলাদেশে ইসলামী দাওয়াহ: প্রতিবন্ধকতা ও প্রতিকার’।
												অতঃপর মদীনা ইসলামী বিশ্ববিদ্যালয়ে পি.এইচ.ডি গবেষণায়
												সুযোগ পাওয়ার গৌরব অর্জন করেন এবং مَنْهَجِيَّةُ
												الدُّكْتُوْرَاه (কোর্স ওয়ার্ক অব পি.এইচ.ডি) তে
												বিশ্ববিদ্যালয়ের সম্মিলিত মেধা তালিকায় ৩য় স্থান অধিকার
												করে পুরস্কৃত হন এবং আবারো মেধার স্বাক্ষর রেখে সর্বোচ্চ
												গ্রেড (مُمْتَازٌ مَعَ مَرْتَبَةِ الشَّرَف الأُوْلَى
												জিপিএ-৫ (এক্সিলেন্ট উইথ ফাস্ট ক্লাস অনার্স) পেয়ে
												পি.এইচ.ডি. ডিগ্রী অর্জন করেন। তার পিএইচ.ডি থিসিসের বিষয়
												ছিল: (تَعْظِيْمُ الْقُرْآنِ الْكَرِيْمِ وَآثَارُهُ فِي
												الدَّعْوَةِ إِلَى الله) ‘কুরআনুল কারীমের প্রতি সম্মান ও
												ইসলামী দাওয়াতে-এর প্রভাব’।
											</p>
										</div>

										<a
											style={{ marginBottom: "0px" }}
											className="heading-r heading-b">
											কর্মজীবন
										</a>
										<div className="blog-detail">
											<p>
												তিনি মদীনায় থাকাকালীন বাংলাভাষা-ভাষীদের মধ্যে বিশুদ্ধ
												জ্ঞান ও দাওয়াত প্রসারের লক্ষ্যে মদীনা ইসলামিক সেন্টারে
												১৫ বছর এবং বাক্বিউল গারক্বাদে ১২ বছর সরকারী অনুবাদক ও
												দাঈ নিযুক্ত ছিলেন। বর্তমানে 'কুল্লিয়াতুল কুরআনিল কারীম
												ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' উত্তরা, ঢাকা –এর সহকারী
												অধ্যাপক ও একাডেমিক প্রধানের দায়িত্বে আছেন।
											</p>
										</div>

										{/*<div className="blog-action">*/}
										{/*  /!*<div className="blog-tag">*!/*/}
										{/*  /!*	<h2>ট্যাগ</h2>*!/*/}

										{/*  /!*	<Link href="/articless/">*!/*/}
										{/*  /!*		<a>#কুরআন</a>*!/*/}
										{/*  /!*	</Link>*!/*/}
										{/*  /!*	<Link href="/articless/">*!/*/}
										{/*  /!*		<a>#হাদিস</a>*!/*/}
										{/*  /!*	</Link>*!/*/}
										{/*  /!*</div>*!/*/}

										{/*  <div className="row row-r">*/}
										{/*    <div className="col col-r">*/}
										{/*      <div className="cv-download">*/}
										{/*        <a*/}
										{/*          className="btn-r cv-download-link"*/}
										{/*          href={`${server}/pdf-viewer/web/viewer.html?file=https://deeniinfotech.sgp1.digitaloceanspaces.com/files/pdf/muhammadsaifullah.com/CV%20of%20Dr%20Abubakar%20Muhammad%20Zakaria%20-%20May%202021.pdf`}*/}
										{/*          target="_blank"*/}
										{/*        >*/}
										{/*          <i className="fas fa-download"></i>*/}
										{/*          <span>সিভি পিডিএফ</span>*/}
										{/*        </a>*/}
										{/*      </div>*/}
										{/*    </div>*/}
										{/*  </div>*/}
										{/*</div>*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export async function getStaticProps(context) {
	const playlists = await getAllPlaylists2();

	return {
		props: {
			playlists: playlists.playlists,
		},
	};
}
