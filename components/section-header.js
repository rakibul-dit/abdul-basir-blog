import Link from "next/link";

export default function SectionHeader({ title, link }) {
	return (
		<div className="title-r title-2">
			<span>{title}</span>
			<div className="title-link">
				<Link href={link} prefetch={false}>
					{/* <a>আরও দেখুন</a> */}
					<button class="seeMoreBtn">
						আরও দেখুন
						<div className="iconButton">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24">
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path
									fill="currentColor"
									d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
							</svg>
						</div>
					</button>
				</Link>
			</div>
		</div>
	);
}
