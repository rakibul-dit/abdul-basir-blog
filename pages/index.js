import {
	getOptHomeImages,
	getHomeLectures,
	getOptHomeQuotes,
	getOptHomeBooks,
	getHomeOrganizations,
	getHomeArticles,
	getHomePapers,
	getAllPlaylists2,
	getHome3Posts4,
	getHomeBooks,
	getHomeRecentLectures,
} from "../lib/fetch";

import Meta from "../components/meta";
import Header from "../components/header";
import HomeRecent from "../components/home/recent";
// import HomeQuoteSlider from "../components/home2/quote-slider";
// import HomeBookList from "../components/home2/books";
// import HomeOrganizations from "../components/home/organizations";
import HomeBanner from "../components/home/banner";
import HomeQuote from "../components/home/quote";
import HomeArticles from "../components/home/articles";
// import HomePostList2 from "../components/home/post-list2";
import HomeBooks from "../components/home/books";
// import HomePostList4 from "../components/home/post-list4";
import HomeOrganizations from "../components/home/organizations2";
// import HomeBookList from "../components/home/books";
// import HomeFeatured from "../components/home2/featured";
import HomePapers from "../components/home/papers";
import Image from "next/image";
import { server } from "../lib/config";

export default function Home({
	lectures,
	// organizations,
	// articles,
	// papers,
	playlists,
	// posts4,
	// organizations2,
	books,
}) {
	return (
		<>
			<Meta
				title="হোম"
				description="ড. আব্দুল বাসির বিন নওশাদ 'কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' উত্তরা, ঢাকা –এর সহকারী অধ্যাপক ও একাডেমিক প্রধান হিসেবে কর্মরত আছেন। তিনি মদীনা ইসলামী বিশ্ববিদ্যালয় থেকে  ‘কুরআনুল কারীমের প্রতি সম্মান ও ইসলামী দাওয়াতে-এর প্রভাব’ শীর্ষক অভিসন্দর্ভের ওপর পিএইচডি ডিগ্রী অর্জন করেন।"
				url={server}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<Header playlists={playlists} />

			<div className="opt_home_ctn">
				<HomeBanner />
				<HomeBooks books={books} />
				<HomeQuote />
				{/* <HomeArticles articles={articles} /> */}
				<HomeRecent lectures={lectures} />
				{/*<HomePapers papers={papers} />*/}
				{/*<HomeOrganizations organizations={organizations} />*/}
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	// const images = await getOptHomeImages();
	// const blogs = await getOptHomeBlogs();
	const lectures = await getHomeRecentLectures();
	// const quotes = await getOptHomeQuotes();
	// const books = await getOptHomeBooks();
	// const organizations = await getHomeOrganizations();
	// const articles = await getHomeArticles();
	// const articles = await getArticles()
	// const papers = await getHomePapers();
	const playlists = await getAllPlaylists2();
	const posts4 = await getHome3Posts4();
	// const organizations2 = await getHomeOrganizations();
	const books = await getHomeBooks();
	// console.log(lectures);
	return {
		props: {
			// images,
			lectures,
			// quotes,
			// organizations,
			// articles,
			// papers,
			playlists: playlists.playlists,
			// organizations2,
			// posts4,
			books,
		},
	};
}
