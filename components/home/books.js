import SectionHeader from "../section-header";
import PostCard1 from "../card/post1";
import BookCard2 from "../card/book2";
// import PostCard2 from "../card/post2";

export default function HomeBooks({ books }) {
	return (
		<section className="h-sec h3-post-3">
			<div className="page-width">
				<div className="box">
					<SectionHeader //
						title="বই সমূহ"
						link="/books/"
					/>
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

						{/* <div className="col col-r s12 l4">
              <PostCard2 post={posts[3]} />
            </div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
