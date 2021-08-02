import styles from './index.less';
import { useModel } from 'umi';
export default function IndexPage() {
  const { globalState } = useModel('@@qiankunStateFromMaster') || {};
  return (
    <div>
      <p>globalState: {JSON.stringify(globalState)}</p>
      <h1 className={styles.title}>react app index</h1>
    </div>
  );
}
