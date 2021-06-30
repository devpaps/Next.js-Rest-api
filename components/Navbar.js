import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function NavBar() {
	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<a>
					<Image
						className={styles.logo}
						width={110}
						height={92}
						src='/images/NASA_logo.svg'
						alt='Workflow'
					/>
				</a>
			</Link>

			<div className={styles.navbar}>
				<ul className={styles.list}>
					<li>
						<Link href='/gallery'>
							<a className={styles.link}>Galleri</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
