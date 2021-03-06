(function () {
    angular
        .module("gamesGrid")
        .controller("listCtrl", ListController);
    function ListController() {
        var vm = this;
        vm.data = gamesData;
        vm.search = "";
    }

    var gamesData = [
        {
            title: "Watch Dog 2",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/10/WD2_Thumb.jpg",
            tags: "Watch Dog 2"
        },
        {
            title: "Steep",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/11/SteepThumbnail.jpg",
            tags: "Steep"
        },
        {
            title: "The Division",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/09/Games_Thumbnails_Division-1.jpg",
            tags: "The Division"
        },
        {
            title: "Assassin's Creed",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/09/ACSThumb169.png",
            tags: "Assassin's Creed"
        },
        {
            title: "Elite Dangerous",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/09/ElitDangerousThumbnail.png",
            tags: "Elite Dangerous"
        },
        {
            title: "Deus Ex",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/09/DX_thumb620.jpg",
            tags: "Deus Ex"
        },
        {
            title: "Solus",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/10/Games_Thumbnails_SolusProject169.jpg",
            tags: "Solus"
        },
        {
            title: "Farming simulator",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/09/FarmingSimulator_thumb.jpg",
            tags: "Farming simulator"
        },
        {
            title: "Pollen",
            image_url: "https://tobiigaming.com/wp-content/uploads/2016/10/Pollen-capsule_main-featureimage.png",
            tags: "Pollen"
        }
    ];

})();
