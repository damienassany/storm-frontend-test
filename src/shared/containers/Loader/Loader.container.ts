import { Stores } from "../../../stores";
import { inject } from "mobx-react";
import { Loader } from "../../components/Loader/Loader.component";

const mapStoreToProps = (stores: Stores): {loading: boolean} => ({
    loading: stores.todoListStore.loading
});

export const LoaderContainer = inject(mapStoreToProps)(Loader);