import { Checkbox } from "../checkbox/Checkbox";
import "./MiniBox.scss";

export const MiniBox = () => {
  const filters = [
    { value: "paid", label: "Paid" },
    { value: "pending", label: "Pending" },
    { value: "draft", label: "Draft" },
  ];

  return (
    <div className="mini-box__container">
      {filters.map((filter) => (
        <Checkbox
          key={filter.value}
          label={filter.label}
          value={filter.value}
        />
      ))}
    </div>
  );
};
