import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
       PopularMovies:null,
       TopRated:null,
       upcoming:null,
       MovieDetails:null,
       MovieCast:null,
       search:null,
       curPage:1,
       topRatedpage:1,
       upcomingpage:1,
       searchpage:1,
       totalsearchpage:1,
       movietext:null,
     
},
    reducers:{
       
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
            },
        addTopRatedMovies:(state,action)=>{
                state.TopRated=action.payload;
                },
        addUpcomingMovies:(state,action)=>{
                    state.upcoming=action.payload;
                    },
     addSearchMovies:(state,action)=>{
                        state.search=action.payload;
                        },
    addMovieDetails:(state,action)=>{
                            state.MovieDetails=action.payload;
                            },
     addMovieCast:(state,action)=>{
                                state.MovieCast=action.payload;
                                },
    addcurPage:(state)=>{
                    state.curPage=state.curPage+1;
                         },
    addPrevPage:(state)=>
                    {   
                    state.curPage=state.curPage-1;
                      },
    addTopPrevPage:(state)=>{
                        state.topRatedpage=state.topRatedpage-1;
                          },
     addTopCurPage:(state)=>{
                            state.topRatedpage=state.topRatedpage+1;
                         },

    addUpPrevPage:(state)=>{
                            state.upcomingpage=state.upcomingpage-1;
                              },
     addUpCurPage:(state)=>{
                                state.upcomingpage=state.upcomingpage+1;
                             },
    addSePrevPage:(state)=>{
                              state.searchpage=state.searchpage-1;
                                },
       addSeCurPage:(state)=>{
                                  state.searchpage=state.searchpage+1;
                               },
      DefaultPage:(state)=>{
                                state.searchpage=1;
                             },
     addTotalPage:(state,action)=>{
                                state.totalsearchpage=action.payload;
                                },
     addMovieText:(state,action)=>{
                                  state.movietext=action.payload;
                                  },
     
   
     
    }

});
export const {addPopularMovies,addTopRatedMovies,addUpcomingMovies,addSearchMovies,addcurPage,addPrevPage,addTopCurPage,addTopPrevPage,addUpCurPage,addUpPrevPage,addMovieDetails,addMovieCast,addSeCurPage,addSePrevPage,addTotalPage,addMovieText,DefaultPage} = moviesSlice.actions;
export default moviesSlice.reducer;