import create from "zustand";
import { devtools } from "zustand/middleware";
import { server } from "../config/index";
import IOffice from "../typings/interfaces/IOffice";
import TOfficeCity from "../typings/types/TOfficeCity";

const initialValueForGloballySelectedOffice: IOffice = {
  city: "dortmund",
  district: "Stadtviertel",
  adress: { street: "straße", housenumber: "1", postcode: "12345" },
  areaInSquareMetres: 100,
  headcount: 25,
  workstations: 25,
  areDogsAllowed: true,
  description:
    "Im Osten Dortmunds gelegen lädt die viergeschossige Zentrale ins Herz adessos ein. Über 400 Mitarbeiter arbeiten hier täglich an der Zukunft der IT.",
  imgSrc: "/images/office.jpg",
};

interface Props {
  allOffices: IOffice[] | [];
  allOfficeNames: TOfficeCity[] | [];
  globallySelectedOfficeName: TOfficeCity;
  setGloballySelectedOfficeName: (office: TOfficeCity) => void;
  globallySelectedOffice: IOffice;
  setGloballySelectedOffice: (officeCityName: TOfficeCity) => void;
  fetchAndSetOffice: () => void;
}

const useOffice = create<Props>()(
  devtools((set, get) => ({
    allOffices: [],
    allOfficeNames: [],
    globallySelectedOfficeName: "dortmund",
    setGloballySelectedOfficeName: (office) => {
      set({ globallySelectedOfficeName: office });
    },
    globallySelectedOffice: initialValueForGloballySelectedOffice,
    setGloballySelectedOffice: (officeCityName) => {
      set((state) => ({
        globallySelectedOffice: state.allOffices.find(
          (entry: IOffice) => entry.city === officeCityName
        ),
      }));
    },
    fetchAndSetOffice: async () => {
      try {
        const res = await fetch(`${server}/api/offices`);
        const fullList = await res.json();
        set({ allOffices: fullList });
        set({
          allOfficeNames: fullList.map((entry: IOffice) => entry.city),
        });
        set((state) => ({
          globallySelectedOffice: fullList.find(
            (entry: IOffice) => entry.city === state.globallySelectedOfficeName
          ),
        }));
      } catch (e) {
        console.error(
          "Something has gone wrong, while fetching the list of offices."
        );
      }
    },
  }))
);

export default useOffice;
