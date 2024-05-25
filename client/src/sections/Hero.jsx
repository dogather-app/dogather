import classes from "../styles/Hero.module.css"

const Hero = () => {
  return (
    <div className={classes.hero__container}>
      <div className={classes.hero__center_box}>
        <h1 className={classes.hero__title}>
          Let your idea find the right people
        </h1>
        <p className={classes.hero__description}>
          Connect with people and build your dream projects together
        </p>
        <button className={classes.hero__btn}>get started</button>
      </div>
    </div>
  )
}

export default Hero
