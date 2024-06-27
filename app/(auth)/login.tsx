import {useEffect, useCallback, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {Hanko, register} from "@teamhanko/hanko-elements";


const hankoUrl = "https://ebc6b9fe-ca5f-4256-8ef9-a3907104f110.hanko.io"

export default function HankoAuth() {
    const navigate = useNavigate();
    const hanko = useMemo(() => new Hanko(hankoUrl), []);

    const redirectAfterLogin = useCallback(() => {
        navigate("/home");
    }, [navigate]);

    useEffect(
        () =>
            hanko.onAuthFlowCompleted(() => {
                redirectAfterLogin();
            }),
        [hanko, redirectAfterLogin]
    );

    useEffect(() => {
        register(hankoUrl).catch((error) => {
            // handle error
        });
    }, []);

    return <hanko-auth/>;
}
