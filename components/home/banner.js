import Link from "next/link";
import Image from "next/image";
import { youtube } from "../../lib/config";

export default function HomeBanner() {
	return (
		<section className="h-sec h-banner h3-banner h-banner-1">
			<div className="page-width">
				<div className="box h-banner-ctn">
					<div className="h-banner-text">
						<div className="h-banner-title">
							<p>অফিসিয়াল ওয়েবসাইট</p>
							<h1>
								<span>ড. আব্দুল বাসির বিন নওশাদ</span>
							</h1>
						</div>
						<p style={{ fontSize: "1.15rem" }}>
							মদীনা ইসলামী বিশ্ববিদ্যালয়ের (কোর্স ওয়ার্ক অব পিএইচডি)-তে
							সম্মিলিত মেধা তালিকায় ৩য় স্থান অধিকার করে পুরস্কৃত হন এবং মেধার
							স্বাক্ষর রেখে সর্বোচ্চ গ্রেডمُمْتَازٌ مَعَ مَرْتَبَةِ الشَّرَف
							الأُوْلَى জিপিএ-৫ (এক্সিলেন্ট উইথ ফাস্ট ক্লাস অনার্স) পেয়ে
							تَعْظِيْمُ الْقُرْآنِ الْكَرِيْمِ وَآثَارُهُ فِي الدَّعْوَةِ إِلَى
							الله)) ‘কুরআনুল কারীমের প্রতি সম্মান ও ইসলামী দাওয়াতে-এর প্রভাব’
							শীর্ষক অভিসন্দর্ভের ওপর পিএইচডি ডিগ্রী অর্জন করেন।
						</p>

						<Link href="about">
							<button class="button-banner">
								বিস্তারিত
								<svg fill="currentColor" viewBox="0 0 24 24" class="icon">
									<path
										clip-rule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
										fill-rule="evenodd"></path>
								</svg>
							</button>
						</Link>

						{/*<div className="h-banner-link">*/}
						{/*  <Link href="/contact/">*/}
						{/*    <a className="btn-r">যোগাযোগ</a>*/}
						{/*  </Link>*/}

						{/*  <Link href="/about/">*/}
						{/*    <a className="btn-r-rev">আমার সম্পর্কে</a>*/}
						{/*  </Link>*/}
						{/*</div>*/}

						{/* <div className="row row-r">
							<div className="col col-r s12 l6">
								<div className="h3-cat-wrap">
									<div className="h3-cat-card">
										<Link href="/books/">
											<a className="card card-r">
												<i className="fas fa-book"></i>
												<span>বই সমূহ</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="col col-r s12 l6">
								<div className="h3-cat-wrap">
									<div className="h3-cat-card">
										<Link href={`/lectures/${youtube.uploadPlaylistID}`}>
											<a className="card card-r">
												<i className="fas fa-video"></i>
												<span>ভিডিও লেকচার</span>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}
					</div>

					{/*<div className="h-banner-image">*/}
					{/*  <div className="banner-image">*/}
					{/*    <Image*/}
					{/*      src="/img/id/profile-02.png"*/}
					{/*      alt=""*/}
					{/*      layout="fill"*/}
					{/*      objectFit="cover"*/}
					{/*      objectPosition="center center"*/}
					{/*      loading="eager" unoptimized*/}
					{/*    />*/}
					{/*  </div>*/}
					{/*</div>*/}

					<div className="opt_home_featured_right">
						<div className="opt_home_featured_image">
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
					</div>
				</div>
			</div>
		</section>
	);
}
