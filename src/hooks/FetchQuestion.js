import { useEffect, useState } from "react";
import data from '../database/data';
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer';

export const useFetchQestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        (async () => {
            try {
                let question = await data;

                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false, apiData: question }));
                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false, serverError: error.message }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
};
