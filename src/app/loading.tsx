import styles from "@/app/loading.module.scss";

const Loading = () => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center w-screen max-w-full min-h-screen p-4 m-0 overflow-hidden transition duration-300 ease-in-out`}
    >
      <div className={styles.outer_circle}>
        <div className={styles.inner_circle}>
          <p className={styles.text}>Please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
