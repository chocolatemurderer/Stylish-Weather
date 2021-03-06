﻿using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using UnknownBackend;

namespace UnknownBackend.Tests
{
    [TestClass]
    public class ClothingOptionUnitTest
    {
        ClothingOption cOptions;
        [TestInitialize]
        public void Init()
        {
            cOptions = new ClothingOption();
        }
        
        [TestMethod]
        public void TestSetTops()
        {
            ClothingCatigory cat1 = ClothingCatigory.warm;
            cOptions.Tops = cat1;
            Assert.AreEqual(cat1, cOptions.Tops);
        }

        [TestMethod]
        public void TestSetPants()
        {
            ClothingCatigory cat1 = ClothingCatigory.warm;
            cOptions.Pants = cat1;
            Assert.AreEqual(cat1, cOptions.Tops);
        }

        [TestMethod]
        public void TestSetShoes()
        {
            ClothingCatigory cat1 = ClothingCatigory.warm;
            cOptions.Shoes = cat1;
            Assert.AreEqual(cat1, cOptions.Tops);
        }

        [TestMethod]
        public void TestSetAll()
        {
            ClothingCatigory cat1 = ClothingCatigory.cold;
            cOptions.SetAll(cat1);
            Assert.AreEqual(cat1, cOptions.Tops);
            Assert.AreEqual(cat1, cOptions.Pants);
            Assert.AreEqual(cat1, cOptions.Shoes);
        }

        [TestMethod]
        public void TestGetCommon()
        {
            ClothingCatigory cat1 = ClothingCatigory.cold;
            cOptions.SetAll(cat1);
            Assert.AreEqual(cat1, cOptions.TempRange);
            cOptions.TempRange = ClothingCatigory.warm;
        }

        [TestMethod]
        public void TestGetStringFromCatigory()
        {
            ClothingCatigory light = ClothingCatigory.warm;
            ClothingCatigory heavy = ClothingCatigory.cold;
            Assert.AreEqual("warm", light.ToString());
            Assert.AreEqual("cold", heavy.ToString());

        }
    }
}
