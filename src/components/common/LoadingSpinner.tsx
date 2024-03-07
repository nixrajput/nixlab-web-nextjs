import styles from "@/app/loading.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.outer_circle}>
      <div className={styles.inner_circle}>
        <p className={styles.text}>Please wait...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
