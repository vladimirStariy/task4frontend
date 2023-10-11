import { FC } from "react";

import styles from './custom.table.module.css';
import CustomCheckbox from "../checkbox/custom.checkbox";
import { IAccount } from "../../store/models/IAccount";

interface ICustomTable {
    data: IAccount[];
    selectAll: (value: boolean) => void;
    handleSelect: (value: boolean, id: number) => void;
    selected: number[];
}

const CustomTable: FC<ICustomTable> = (props) => {  
    return <>
        <table className={styles.customTable}>
            <thead>
                <tr>
                    <th className={`${styles.rowHeader} ${styles.bodyTd}`}>
                        <label className={styles.bodyLabel}>
                            <CustomCheckbox 
                                name={-1} 
                                value={props.selected.length === props.data.length} 
                                handleSelect={props.selectAll}
                            />
                        </label>
                    </th>
                    <th className={`${styles.cellItem} ${styles.bodyTd}`}>#</th>
                    <th className={`${styles.cellItem} ${styles.bodyTd}`}>Email</th>
                    <th className={`${styles.cellItem} ${styles.bodyTd}`}>Name</th>
                    <th className={`${styles.cellItem} ${styles.bodyTd}`}>Last login</th>
                    <th className={`${styles.cellItem} ${styles.bodyTd}`}>Registered at</th>
                    <th className={`${styles.cellItem} ${styles.bodyTd}`}>Status</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.data.map((item) => {
                        return <>
                            <tr key={item.id} className={styles.bodyTr}>
                                <td className={`${styles.rowHeader} ${styles.bodyTd}`}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <CustomCheckbox name={item.id} value={props.selected.includes(item.id)} handleSelect={props.handleSelect}/>
                                    </label>
                                </td>
                                <td className={styles.bodyTd}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <div className={styles.cellItem}>{item.id}</div>    
                                    </label>
                                </td>
                                <td className={styles.bodyTd}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <div className={styles.cellItem}>{item.email}</div>
                                    </label>
                                </td>
                                <td className={styles.bodyTd}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <div className={styles.cellItem}>
                                            {item.name}
                                        </div>    
                                    </label>
                                </td>
                                <td className={styles.bodyTd}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <div className={styles.cellItem}>
                                            {item.lastLogin}
                                        </div>    
                                    </label>
                                </td>
                                <td className={styles.bodyTd}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <div className={styles.cellItem}>
                                            {item.registeredAt}
                                        </div>    
                                    </label>
                                </td>
                                <td className={styles.bodyTd}>
                                    <label className={styles.bodyLabel} htmlFor={`${item.id}-checkbox`}>
                                        <div className={styles.cellItem}>
                                            {item.isBanned ? 
                                                <div style={{color: 'red'}}>Blocked</div> 
                                                : 
                                                <div style={{color: 'green'}}>Active</div>
                                            }
                                        </div>    
                                    </label>
                                </td>
                            </tr>
                        </>
                    })
                }
                
            </tbody>
        </table>
    </>
}

export default CustomTable;