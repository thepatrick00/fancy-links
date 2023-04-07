import React from 'react'
import './Home.css'
import Page from './components/Page'
import { Link } from 'react-router-dom'
import Chip from './components/Chip'

// this is like the home page in a sense
function Home() {
  return (
    <>
      <Page>
        <div>
          <h1>Welcome to MoneyDecent!</h1>
          <h2>About</h2>
          <p>
            This is a site where you can earn money more easily with
            online search rewards using <span>Swagbucks search</span>{' '}
            and
            <span> Microsoft Rewards search</span>.
          </p>

          <h2>Purpose</h2>
          <p>
            Search more quickly and easily with links that are
            guaranteed to work.
          </p>

          <h2>Features</h2>
          <ul>
            <li>
              When you search each click is tracked using a
              counter.time You don't have to manually count your
              clicks.
            </li>
            <li>
              A progress bar is also included for a more visual way to
              tell your progress.
            </li>
            <li>
              Your clicks are saved! You can reload the page, close
              the page, switch tabs, and your progress will still be
              there. You don't have to do all your clicks in one go.
            </li>
            <li>
              Saved clicks automatically reset to zero every night after 12am.
            </li>
          </ul>

          <h2>Feedback</h2>
          <p>
            If you have any feedback I will gladly listen!
            <Link to="/contact"> Message me here</Link>
          </p>
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              marginTop: '2rem'
            }}
          >
            <Chip
              title="Search Swagbucks"
              // description="try"
              link="/swagbucks"
              color="sky"
              cardText="SB"
              style={{paddingRight: '2rem'}}
            />
            <Chip
              title="Search Microsoft Rewards"
              // description="try sb"
              link="/microsoft"
              color="grass"
              cardText="MR"
            />
          </div>
        </div>
      </Page>
    </>
  )
}

export default Home