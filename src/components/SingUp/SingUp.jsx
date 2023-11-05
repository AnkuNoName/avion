import React from 'react'
import styles from './SingUp.module.scss'

const SingUp = () => {
  return (
		<div className={styles.singUp}>
			<div className={styles.container}>
				<div className={styles.singUpInner}>
					<div className={styles.singUpTitle}>
						<h1>Join the club and get the benefits</h1>
					</div>

					<div className={styles.singUpText}>
						<p>
							Sign up for our newsletter and receive exclusive offers on new
							ranges, sales, pop up stores and more
						</p>
					</div>

					<div className={styles.singUpInput}>
						<input type='email' placeholder='your@email.com' />
						<button>Sign up</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SingUp