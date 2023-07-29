import Image from "next/image";
import styles from "@/app/styles/home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className={`${styles.header} container`}>
        <div>
          <Link href={`/`}>
            <Image
              src="/assets/logo.svg"
              alt="logo"
              draggable="false"
              width={120}
              height={30}
            />
          </Link>
        </div>
        <Link href={`/projects`} className={styles.btn__get_started}>
          Get Started
        </Link>
      </header>
      <div className={`${styles.hero} container`}>
        <div className={`${styles.hero__body} gap`}>
          <h1 className="fw-black fs-title-lg">
            Manage all client projects in one place and{" "}
            <span className={styles.fancy_text}>streamline your workflow</span>
          </h1>
          <p className="text-neutral-700">
            Service providers can streamline their workflow and organize all
            client projects with SuperWise while giving clients a more
            personalized and professional experience.
          </p>
          <Link href={`/projects`} className={styles.btn__cta}>
            Build your client portal
          </Link>
        </div>
      </div>
      <div className={`${styles.tools} container`}>
        <p className="fw-bold fs-body-lg text-neutral-900">
          Tools that it can replace.
        </p>
        <div className={styles.tools__icons}>
          <Image
            src="/assets/asana_logo.svg"
            alt="asana"
            width={120}
            height={120}
          />
          <Image
            src="/assets/gmail.svg"
            alt="gmail"
            className="width-sm"
            width={30}
            height={30}
          />
          <Image src="/assets/slack.svg" alt="slack" width={40} height={30} />
          <Image
            src="/assets/trello.svg"
            alt="trello"
            width={120}
            height={120}
          />
          <Image
            src="/assets/drive.svg"
            alt="drive"
            className="width-sm"
            width={35}
            height={35}
          />
          <Image
            src="/assets/dropbox.svg"
            alt="dropbox"
            width={120}
            height={120}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
