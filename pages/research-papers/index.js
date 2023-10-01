import { server } from "../../lib/config";
import { getPapers, getAllPlaylists2 } from "../../lib/fetch";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import Header from "../../components/header";
import PostCardPaper from "../../components/card/post-card-paper";
import Pagination from "../../components/pagination";

export default function BlogList({ papers, playlists }) {
	return (
		<>
			<Meta
				title="রিসার্চ পেপারস"
				description="ড. আব্দুল বাসির বিন নওশাদ 'কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' উত্তরা, ঢাকা –এর সহকারী অধ্যাপক ও একাডেমিক প্রধান হিসেবে কর্মরত আছেন। তিনি মদীনা ইসলামী বিশ্ববিদ্যালয় থেকে  ‘কুরআনুল কারীমের প্রতি সম্মান ও ইসলামী দাওয়াতে-এর প্রভাব’ শীর্ষক অভিসন্দর্ভের ওপর পিএইচডি ডিগ্রী অর্জন করেন।"
				url={`${server}/research-papers`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<Header playlists={playlists} />

			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>রিসার্চ পেপারস{/* <span>১২</span> */}</h1>
						{/*<p>আমার বাংলা নিয়ে প্রথম কাজ করবার সুযোগ তৈরি হয়েছিল অভ্র নামক এক যুগান্তকারী বাংলা সফ্‌টওয়্যার হাতে পাবার মধ্য দিয়ে।</p>*/}
					</div>
				</div>
			</section>

			<section className="cat-page-papers">
				<div className="page-width">
					<div className="box">
						{/*<div className="row row-r">*/}
						{/*  {papers &&*/}
						{/*    papers.length &&*/}
						{/*    papers.map((paper) => (*/}
						{/*      <div className="col col-r s12 xl6" key={paper.id}>*/}
						{/*        <PostCardPaper paper={paper} />*/}
						{/*      </div>*/}
						{/*    ))}*/}
						{/*</div>*/}

						<p style={{ marginBottom: "30px" }}>আপডেট করা হবে ইন শা আল্লাহ।</p>
					</div>
				</div>
			</section>

			{/*<Pagination />*/}
		</>
	);
}

export async function getStaticProps(context) {
	//const res = await fetch(`${server}/api/papers/listpage`)
	//const papers = await res.json()

	const papers = await getPapers();
	const playlists = await getAllPlaylists2();

	return {
		props: {
			papers,
			playlists: playlists.playlists,
		},
	};
}
