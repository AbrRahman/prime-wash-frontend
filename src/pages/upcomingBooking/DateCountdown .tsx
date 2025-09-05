import Countdown from "react-countdown";
type CountdownRenderProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const DateCountdown = ({ date }: { date: Date | undefined }) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return "";
    } else {
      // Render a countdown
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };
  return date ? <Countdown date={date} renderer={renderer} /> : "";
};

export default DateCountdown;
