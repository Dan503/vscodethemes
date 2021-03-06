import * as React from 'react'
import styles from './Checkbox.styles'

interface CheckboxProps {
  checked: boolean
  onChange: (value: boolean) => any
}

const Checkbox: React.SFC<CheckboxProps> = ({
  checked = false,
  onChange,
  children,
}) => (
  <label className={styles.label}>
    <input
      type="checkbox"
      checked={checked}
      onChange={evt => onChange(evt.target.checked)}
      className={styles.input}
    />
    <div className={styles.text}>{children}</div>
  </label>
)

export default Checkbox
