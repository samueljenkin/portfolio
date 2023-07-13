import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import DefaultLayout from "../layout/DefaultLayout";
import { skillSet, projectPreviews } from '../../importImages'
import './Portfolio.css'

const Portfolio = () => {
  const openLink = path => window.open(path, '_blank')

  return (
    <DefaultLayout>
      <h1>Projects</h1>
      <section className="project-list">
        <section className="project">
          <h2>TripWise</h2>
          <img className="project-preview" src={projectPreviews.TripWise} alt="TripWise" />
          <section className="skill-set">
            <img src={skillSet.HTML5} alt="HTML5" />
            <img src={skillSet.CSS} alt="CSS" />
            <img src={skillSet.JavaScript} alt="JavaScript" />
            <img src={skillSet.PostgreSQL} alt="PostgreSQL" />
            <img src={skillSet['Node.js']} alt="Node.js" />
            <img src={skillSet.Express} alt="Express" />
            <img src={skillSet.React} alt="React" />
          </section>
          <p>Discover attractions based on your location, time and budget with TripWise. Effortlessly view and organise your saved trips for a memorable holiday experience. It's the perfect app for a budget-friendly and exciting getaway.</p>
          <section className="buttons">
            <Button
              fullWidth
              sx={{ 
                marginRight: '1rem', 
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://github.com/samueljenkin/TripWise')}
            >
              GitHub
            </Button>
            <Button
              fullWidth
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://tripwise-app.onrender.com/')}
              sx={{
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
            >
              Live App
            </Button>
          </section>
        </section>

        <section className="project">
          <h2>Brain Busters</h2>
          <img className="project-preview" src={projectPreviews.BrainBusters} alt="Brain Busters" />
          <section className="skill-set">
            <img src={skillSet.HTML5} alt="HTML5" />
            <img src={skillSet.CSS} alt="CSS" />
            <img src={skillSet.JavaScript} alt="JavaScript" />
            <img src={skillSet.PostgreSQL} alt="PostgreSQL" />
            <img src={skillSet['Node.js']} alt="Node.js" />
            <img src={skillSet.Express} alt="Express" />
          </section>
          <p>Join Brain Busters' Quiz Questionnaire and test your knowledge with our user-friendly web app. Can you achieve a perfect score of 100%? Start your exciting learning journey now!</p>
          <section className="buttons">
            <Button
              fullWidth
              sx={{ 
                marginRight: '1rem', 
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://github.com/samueljenkin/Brain_Busters')}
            >
              GitHub
            </Button>
            <Button
              fullWidth
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://brain-busters-app.onrender.com/')}
              sx={{
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
            >
              Live App
            </Button>
          </section>
        </section>

        <section className="project">
          <h2>StingSearch</h2>
          <img className="project-preview" src={projectPreviews.StingSearch} alt="StingSearch" />
          <section className="skill-set">
            <img src={skillSet.HTML5} alt="HTML5" />
            <img src={skillSet.CSS} alt="CSS" />
            <img src={skillSet.Python} alt="Python" />
            <img src={skillSet.PostgreSQL} alt="PostgreSQL" />
            <img src={skillSet.Flask} alt="Flask" />
          </section>
          <p>Discover your dream job at StingSearch! This user-friendly platform offers advanced search options based on title, location, type and salary. Track your progress with viewed, applied and saved jobs. Unlock limitless career possibilities today!</p>
          <section className="buttons">
            <Button
              fullWidth
              sx={{ 
                marginRight: '1rem', 
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://github.com/samueljenkin/StingSearch')}
            >
              GitHub
            </Button>
            <Button
              fullWidth
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://stingsearch-app.onrender.com/')}
              sx={{
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
            >
              Live App
            </Button>
          </section>
        </section>

        <section className="project">
          <h2>Tic Tac Toe</h2>
          <img className="project-preview" src={projectPreviews.TicTacToe} alt="Tic Tac Toe" />
          <section className="skill-set">
            <img src={skillSet.HTML5} alt="HTML5" />
            <img src={skillSet.CSS} alt="CSS" />
            <img src={skillSet.JavaScript} alt="JavaScript" />
          </section>
          <p>Welcome to my revamped version of Tic Tac Toe! Enjoy personalised names, sleek design and keep track of rounds and scores for an enhanced gaming experience. Grab a friend and let the fun begin!</p>
          <section className="buttons">
            <Button
              fullWidth
              sx={{ 
                marginRight: '1rem', 
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://github.com/samueljenkin/Tic-Tac-Toe')}
            >
              GitHub
            </Button>
            <Button
              fullWidth
              variant="contained"
              endIcon={<LaunchIcon />}
              onClick={() => openLink('https://samueljenkin.github.io/Tic-Tac-Toe/')}
              sx={{
                backgroundColor: '#156064',
                '&:hover': {
                  backgroundColor: '#A167A5'
                }
              }}
            >
              Live Site
            </Button>
          </section>
        </section>
      </section>
    </DefaultLayout>
  )
}

export default Portfolio