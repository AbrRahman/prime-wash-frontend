const SlotSkeleton = () => {
  return (
    <div className="px-2 py-2.5 bg-brand-secondary rounded-lg flex justify-center animate-pulse">
      <div className="w-full h-4 bg-brand-primary rounded-lg animate-pulse">
        <span className="opacity-0"> 09:30 am-10:00 am</span>
      </div>
    </div>
  );
};

export default SlotSkeleton;
