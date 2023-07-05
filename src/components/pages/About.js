import DefaultLayout from "../layout/DefaultLayout";
import { skillSet, skillSetNames } from '../../importImages'
import bodyshot from '../../images/me/bodyshot.png'
import './About.css'

const About = () => {
  return (
    <DefaultLayout>
      <h1>About Me</h1>

      <section className="about-me">
        <img src={bodyshot} alt="Sam Jenkin" />
        <section className="description">
          <h2>Who am I?</h2>
          <p>
            I am someone who is passionate about finding solutions to complex challenges. I thrive on taking ideas from conception to completion, using my strong problem-solving skills to overcome obstacles along the way. My friendly and outgoing personality, along with my effective communication and teamwork abilities, make me a reliable and collaborative member of any team.
          </p>
          <p>
            I have a unique perspective formed through many customer service and hospitality roles which allowed me to engage with people from all walks of life. My experiences allow me to bring fresh insights to the projects I work on. I am dedicated to delivering results and am always eager to learn and improve. If you're looking for someone who is enthusiastic, hardworking, and can bring a creative approach to your organisation, I am confident that I can be a valuable addition to your team.
          </p>
        </section>
      </section>
      
      <section className="skills-list">
        <h2>Skill Set</h2>
        <section className="skills">
          {skillSetNames.map(skill => 
            <section key={skill} className="skill">
              <img src={skillSet[skill]} alt={skill} />
              <p>{skill}</p>
            </section>  
          )}
        </section>
      </section>
      

      <section className="interest-list">
        <h2>Interests</h2>
        <sections className="interests">
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">landscape</span> 
              <h3>Great Outdoors</h3>
            </section> 
            <p>I enjoy a range of outdoor activities such as hiking, camping, swimming, snowboarding, and rock climbing. These pursuits allow me to connect with nature and challenge myself physically while experiencing the beauty of the outdoors.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">code</span> 
              <h3>Coding Challenges</h3>
            </section> 
            <p>I actively seek out coding challenges to enhance my problem-solving skills. Engaging in these challenges keeps me up-to-date with the latest trends and techniques in programming, fostering continuous growth in my abilities.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">sports</span> 
              <h3>Sports</h3>
            </section> 
            <p>I am passionate about sports, particularly football and basketball. Participating in these activities not only keeps me physically fit but also cultivates teamwork and leadership skills.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">flight</span> 
              <h3>Travel</h3>
            </section> 
            <p>I have a deep love for travel, exploring both Australia and the world. It provides me with opportunities to immerse myself in different cultures, broaden my horizons, and create lasting memories.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">restaurant</span> 
              <h3>Culinary Exploration</h3>
            </section> 
            <p>I enjoy diverse food experiences through dining out and cooking at home. Exploring various cuisines allows me to embrace cultural diversity and express my creativity in the kitchen.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">music_note</span> 
              <h3>Music</h3>
            </section> 
            <p>I have a deep passion for music and enjoy exploring various genres. Whether attending live performances or discovering new artists, music is a constant source of inspiration and relaxation in my life.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">landscape</span> 
              <h3>Quality Time</h3>
            </section> 
            <p>Spending cherished moments with family and friends is important to me. I value meaningful connections and make an effort to create lasting memories through shared experiences.</p>
          </section>
          <section className="interest">
            <section className="title">
              <span class="material-symbols-outlined">weekend</span> 
              <h3>Relaxation</h3>
            </section> 
            <p>I prioritise taking time for myself and unwinding to maintain a healthy work-life balance. Engaging in leisurely activities, such as reading or going for walks, allows me to recharge and rejuvenate.</p>
          </section>
        </sections>
      </section>
    </DefaultLayout>
  )
}

export default About