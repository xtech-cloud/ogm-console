export interface IAppConfig {
    api: {
        ams: string;
        kms: string;
        bla : {
            mlb: string;
        };
        msa: {
            license: string;
        }
    };
    web: {
        consul: string;
    };
}
