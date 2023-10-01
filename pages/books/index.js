import { server } from "../../lib/config";
import { getBooks, getAllPlaylists2 } from "../../lib/fetch";
import Layout from "../../components/layout";
import Meta from "../../components/meta";
import Header from "../../components/header";
import BookCard from "../../components/card/post-card-book";
import BookCard2 from "../../components/card/book2";
import Pagination from "../../components/pagination";

export default function BookList({ books, playlists }) {
	return (
		<>
			<Meta
				title="বই সমূহ"
				description="ড. আব্দুল বাসির বিন নওশাদ 'কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' উত্তরা, ঢাকা –এর সহকারী অধ্যাপক ও একাডেমিক প্রধান হিসেবে কর্মরত আছেন। তিনি মদীনা ইসলামী বিশ্ববিদ্যালয় থেকে  ‘কুরআনুল কারীমের প্রতি সম্মান ও ইসলামী দাওয়াতে-এর প্রভাব’ শীর্ষক অভিসন্দর্ভের ওপর পিএইচডি ডিগ্রী অর্জন করেন।"
				url={`${server}/books`}
				image={`${server}/img/id/default_share.png`}
				type="website"
			/>

			<Header playlists={playlists} />

			<section className="cat-page-top">
				<div className="page-width">
					<div className="box">
						<h1>বই সমূহ</h1>
					</div>
				</div>
			</section>

			<section className="cat-page-books">
				<div className="page-width">
					<div className="box">
						<div className="row row-r">
							{books &&
								books.length &&
								books.map((book) => (
									<div className="col col-r s12 l3" key={book.id}>
										<BookCard2 book={book} />
									</div>
									// book card design 1
									// <div className="col col-r s12 l4" key={book.id}>
									// 	<BookCard book={book} />
									// </div>
								))}
						</div>
						{/*<p style={{ marginBottom: "30px" }}>*/}
						{/*  আরও দেখুন:{" "}*/}
						{/*  <a*/}
						{/*    href="https://islamhouse.com/bn/author/25506/books/showall/1"*/}
						{/*    target="_blank"*/}
						{/*  >*/}
						{/*    https://islamhouse.com/bn/author/25506/books/showall/1*/}
						{/*  </a>*/}
						{/*</p>*/}
					</div>
				</div>
			</section>

			{/*<Pagination />*/}
		</>
	);
}

export async function getStaticProps(context) {
	//const res = await fetch(`${server}/api/books/listpage`)
	//const books = await res.json()

	const books = await getBooks();
	const playlists = await getAllPlaylists2();

	return {
		props: {
			books,
			playlists: playlists.playlists,
		},
	};
}
