import { FC } from "react";

import styles from './custom.row.module.css';

const CustomTableRow: FC = () => {
    return <>
        <table className={styles.customTableRow}>
            <thead>
                <tr>
                    <th>Person 1</th>
                    <th>Person 2</th>
                    <th>Person 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>asd</td>
                    <td>asd</td>
                    <td>asd</td>
                </tr>
            </tbody>
        </table>
    </>
}

export default CustomTableRow;