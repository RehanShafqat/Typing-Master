import  { useEffect, useState } from 'react';

type Params = {
    totalWords: number,
    accuracy: number,
    speed: number,
    onClose: () => void,
}

const Dialog = ({ totalWords, accuracy, speed, onClose }: Params) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Open dialog with slide-down animation
        setIsVisible(true);
        return () => {
            // Close dialog with slide-up animation
            setIsVisible(false);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                className={`bg-white p-4 rounded shadow-md md:w-[70%] w-[100%] flex flex-col transition-transform duration-300 ${isVisible ? 'animate-slide-down' : 'animate-slide-up'}`}
            >
                <div>
                    <h2 className="text-xl font-bold mb-4 text-center">Typing Stats</h2>
                    <div className="stat-item mb-2">
                        <span className="font-medium">Total Words:</span> {totalWords}
                    </div>
                    <div className="stat-item mb-2">
                        <span className="font-medium">Accuracy:</span> {accuracy}%
                    </div>
                    <div className="stat-item mb-2">
                        <span className="font-medium">Speed:</span> {speed} WPM
                    </div>
                </div>
                
                <div className="flex justify-end mt-4">
                    <button 
                        onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }} 
                        className="px-6 hover:bg-red-400 py-1 outline-none bg-red-500 text-white"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
