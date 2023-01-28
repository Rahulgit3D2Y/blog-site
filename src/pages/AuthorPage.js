import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">About the Author : rahul3d2y</h1>
          <img src="./img/hutao.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">rahul3d2y have always been interested in computer, more specifically in computer games , class 12 kind of a Turing point in his life. The decision to pick computer science helped him divert his life on to the track of being a developer .now a days he is tiring to learn web development. He has grasped the bases of HTML,CSS & JavaScript. online website like w3school and freecodecamp holds a great respect to this progression.other site like frontendmentor helped him to practice his css,js skills. And now is learning the use of API, framework like Bootstrap, CSS improvements like SASS ,etc. In Future he might try to learn the full Course required for a MERN developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AuthorPage;