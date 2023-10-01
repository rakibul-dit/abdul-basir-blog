import { server } from "../../lib/config";
import { getArticles, getAllPlaylists2 } from "../../lib/fetch";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import Header from "../../components/header";
import PostCardArticle from "../../components/card/post-card-article";
import PostCardArticle2 from "../../components/card/post-card-article2";
import Pagination from "../../components/pagination";

export default function BlogList({ articles, playlists }) {
	return (
		<>
			<Meta
				title="প্রবন্ধ সমূহ"
				description="ড. আব্দুল বাসির বিন নওশাদ 'কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' উত্তরা, ঢাকা –এর সহকারী অধ্যাপক ও একাডেমিক প্রধান হিসেবে কর্মরত আছেন। তিনি মদীনা ইসলামী বিশ্ববিদ্যালয় থেকে  ‘কুরআনুল কারীমের প্রতি সম্মান ও ইসলামী দাওয়াতে-এর প্রভাব’ শীর্ষক অভিসন্দর্ভের ওপর পিএইচডি ডিগ্রী অর্জন করেন।"
				url={`${server}/articles`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<Header playlists={playlists} />

			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>
							প্রবন্ধ সমূহ
							{/*<span>৯</span>*/}
						</h1>
						{/*<p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।</p>*/}
					</div>
				</div>
			</section>

			<section className="cat-page-articles">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
							{articles &&
								articles.length &&
								articles.map((article) => (
									<div className="col col-r s12 xl4" key={article.id}>
										<PostCardArticle article={article} />
									</div>
								))}
						</div>
						{/*<p style={{ margin: "10px 0 30px 0" }}>*/}
						{/*  আরও দেখুন:{" "}*/}
						{/*  <a*/}
						{/*    href="https://islamhouse.com/bn/author/25506/articles/showall/1"*/}
						{/*    target="_blank"*/}
						{/*  >*/}
						{/*    https://islamhouse.com/bn/author/25506/articles/showall/1*/}
						{/*  </a>*/}
						{/*</p>*/}
					</div>
				</div>
			</section>

			{/*<section className="cat-page-articles">*/}
			{/*		<div className="page-width">*/}
			{/*			<div className="box">*/}
			{/*				<div className="row row-r">*/}
			{/*				{*/}
			{/*					articles && articles.length && articles.map(article =>*/}
			{/*						<div className="col col-r s12 xl4" key={article.id}>*/}
			{/*							<PostCardArticle2 article={article} />*/}
			{/*						</div>*/}
			{/*					)*/}
			{/*				}*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</section>*/}

			{/*<Pagination />*/}
		</>
	);
}

export async function getStaticProps(context) {
	//const res = await fetch(`${server}/api/articles/listpage`)
	//const articles = await res.json()

	const articles = await getArticles();
	const playlists = await getAllPlaylists2();

	return {
		props: {
			articles,
			playlists: playlists.playlists,
		},
	};
}
